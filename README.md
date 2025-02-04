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

Setup Database
1. Terlebih dahulu buat sebuah database dengan nama bebas
2. Buat sebuah database di user postgresql dengan nama bebas ({nama_database})
3. psql -U postgres -d {nama_database} -f Database/init.sql

Backend
1. Buka temrinal di directory
2. cd Backend
3. Buat sebuah virtual environment: python -m venv venv 
4. Aktivasi virtual enviroonment: venv\Scripts\activate
5. Install dependencies: pip install -r requirements.txt 
6. Luncurkan backend: python app.py
7. Masukkan username & password postgresql, beserta nama database, sesuai dengan prompt yang muncul.
