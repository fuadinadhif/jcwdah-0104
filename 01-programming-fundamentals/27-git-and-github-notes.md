# Git and GitHub Notes

## Git Commands

1. git config --list: Melihat seluruh konfigurasi git milik kita
2. git config --global user.name: Membuat username git
3. git config --global user.email: Membuat email git
4. git init: Mengubah folder biasa menjadi folder git
5. git status: Memeriksa status folder/repository git
6. git add: Menambahkan sebuah file/folder ke dalam staging area git
7. git commit:
   - git commit -m "[commit message]" : Memindahkan sebuah file/folder ke dalam repository git
8. git log: Melihat commit history
9. git branch:
   - git branch: Untuk melihat branch git repository kita
   - git branch -M [new branch name]: Mengubah nama branch saat ini
10. git remote:
    - git remote add origin [link remote repository]: Mengoneksikan local repository dengan remote repository
    - git remote -v: Untuk melihat alamat remote repository
    - git remote set-url origin [link remote repository]: Mengganti remote repository
11. git push:
    - git push: Upload perubahan yang ada di local repository ke remote repository
    - git push -u origin [branch name]: Upload perubahan dan set default branch
    - git push origin [branch name]: Upload perubahan ke spesifik branch tanpa merubah default branch
12. git clone: Mendownload repository remote ke repository local

## Step Membuat GitHub Repository

1. Buat akun
2. Klik tombol "new repository"
3. Buat nama repository
4. Tambahkan deskripsi repository
5. Pilih tipe (public/private) repository
6. Klik create repository button
7. Buka folder yang mau dipush di terminal komputer
8. ```
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin [link remote repository]
   git push -u origin main
   ```

## Flow Update Repository

1. Lakukan perubahan di dalam repository (add file / edit / delete)
2. git add .
3. git commit -m "[commit message]"
4. git push
