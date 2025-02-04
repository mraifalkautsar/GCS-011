# GCS-011

Program ini adalah sebuah Single Page Application (SPA) yang dibangun menggunakan Vite dengan framework React. Laman yang dibuat mengemukakan sebuah antarmuka kendali fiksi dari kapal ruang angkasa SSV Normandy dari permainan Mass Effect.

CARA MENJALANKAN PROGRAM
Lakukan clone terlebih dahulu terhadap repository (git clone https://github.com/mraifalkautsar/GCS-011.git)

Frontend
1. Buka terminal di directory
2. cd Frontend
3. npm install
4. npm run dev
5. http://localhost:5173

Setup Database alt.1
1. Terlebih dahulu buat sebuah user bernama 'aksantara' dengan password '1234'
2. Buat sebuah database di user postgresql dengan nama bebas 'gcs'
3. psql -U aksantara -d gcs -f Database/init.sql

Setup Database alt.2
1. Seperti alt.1, hanya saja ubah isi app.config['SQLALCHEMY_DATABASE_URI'] pada kode app.py menjadi 'postgresql://{nama_user}:{password}@{host}:{port}/{database}' sesuai dengan lingkungan

Backend
1. Buka temrinal di directory
2. cd Backend
3. Buat sebuah virtual environment: python -m venv venv 
4. Aktivasi virtual enviroonment: venv\Scripts\activate
5. Install dependencies: pip install -r requirements.txt 
6. Luncurkan backend: python app.py
