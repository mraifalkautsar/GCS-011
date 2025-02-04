from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from flask_cors import CORS
import datetime

app = Flask(__name__)

pg_user = input("Enter PostgreSQL username: ")
pg_password = input("Enter PostgreSQL password: ")
pg_dbname = input("Enter database name: ")

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://{pg_user}:{pg_password}@localhost:5432/{pg_dbname}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = '40c4ce1b831d5169b78a64af08a240478c99d554748356112dddd809409a7ad9'
CORS(app)


db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Define User model
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.datetime.now(datetime.timezone.utc))

# Define ContactUs model
class ContactUs(db.Model):
    __tablename__ = 'contact_us'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(15))
    title = db.Column(db.String(100))
    message = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

# Sign up endpoint
@app.route('/auth/signup', methods=['POST'])
def signup():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=data['username'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

# Login endpoint
@app.route('/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter((User.email == data['email']) | (User.username == data['email'])).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({'token': access_token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

# Contact Us form endpoint
@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    new_contact = ContactUs(name=data['name'], email=data['email'], phone=data['phone'],
                            title=data['title'], message=data['message'])
    db.session.add(new_contact)
    db.session.commit()
    return jsonify({'message': 'Message received successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)