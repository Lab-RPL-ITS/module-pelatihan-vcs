# Memulai Dengan Git Local

![Git Remote](assets/materi-2/struktur-git.png)

## Konfigurasi

Sebelum kita melakukan commit dan push ke repository, kita harus melakukan konfigurasi terlebih dahulu. Konfigurasi ini hanya dilakukan sekali saja. Dengan tujuan agar git dapat mengenali siapa yang melakukan commit dan push ke repository. Untuk melakukan konfigurasi, kita dapat menggunakan perintah berikut:

```bash
git config --global user.name "Nama Anda"
git config --global user.email "Email Anda"
```

- `git config` adalah perintah untuk melakukan konfigurasi pada git
- `--global` adalah perintah untuk melakukan konfigurasi secara global, artinya konfigurasi ini akan digunakan untuk semua repository yang ada di komputer kita. Jika tidak menggunakan `--global`, maka konfigurasi hanya akan digunakan untuk repository yang sedang aktif saja.

**Example**
```bash
git config --global user.name "Lab RPL ITS"
git config --global user.email "rpl@its.ac.id"
```

Untuk Melihat konfigurasi yang telah kita lakukan, kita dapat menggunakan perintah berikut:

```bash
git config --list
```

Hasil:
![Git Config Example](assets/materi-2/git-config-example.png)

## Inisialisasi Repository

Setelah melakukan konfigurasi, kita dapat melakukan inisialisasi repository. Inisialisasi repository dilakukan dengan cara menjalankan perintah `git init` pada folder yang akan kita gunakan sebagai repository.

```bash
git init
```

Perintah tersebut akan membuat sebuah foler `.git` yang berisi object database dari git. Folder `.git` ini yang akan digunakan oleh git untuk melakukan tracking terhadap perubahan yang terjadi pada repository.

## Remote Repository

Remote repository digunakan untuk menghubungkan repository yang berada di local dengan repository yang berada di server. Dengan adanya **remote** repository, kita dapat melakukan push dan pull dari repository yang berada di server.

Simplenya, kita perlu interface antara browser kita dengan local kita melalui perantara internet dan *remote* sebagai interface nya. Dengan begini, local dan server akan saling terhubung

Untuk menambahkan remote repository, kita dapat menggunakan perintah berikut:

```bash
git remote add origin <url>
```

- `origin` adalah nama remote repository yang akan kita tambahkan. Nama origin ini tidak baku, kita dapat menggantinya dengan nama lain.

Untuk melihat remote repository yang telah kita tambahkan, kita dapat menggunakan perintah berikut:

```bash
git remote -v
```

> Kita dapat menambahkan lebih dari satu remote repository pada satu proyek

## Membuat Commit

Setelah melakukan perubahan pada repository, maka perubahan yang kita lakukan terdapat pada working directory. Untuk melakukan commit kita perlu memindahkan perubahan yang ada pada working directory ke staging area.

Untuk memindahkan perubahan yang ada pada working directory ke staging area, kita dapat menggunakan perintah berikut:

```bash
git add .
```

> `.` adalah perintah untuk memindahkan semua perubahan yang ada pada working directory ke staging area. Jika kita ingin memindahkan perubahan yang ada pada satu file saja, kita dapat mengganti `.` dengan nama file yang akan kita pindahkan.

![Skema Commit](assets/materi-2/working-directory.png)

Sebelum kita melakukan commit, pada dasarnya kita harus melakukan pengecekan terlebih dahulu terhadap perubahan yang ada pada staging area.
Untuk melakukan pengecekan terhadap perubahan yang ada pada staging area, kita dapat menggunakan perintah berikut:

```bash
git status
```

Setelah dirasa perubahan yang ada pada staging area sudah sesuai, kita dapat melakukan commit. Untuk melakukan commit, kita dapat menggunakan perintah berikut:

```bash
git commit -m "pesan commit"
```

Melalui perintah tersebut, kita telah berhasil memindahkan perubahan yang ada pada staging area ke repository. Untuk melihat commit yang telah kita lakukan, kita dapat menggunakan perintah berikut:

```bash
git log
```

Kemudian akan muncul informasi commit yang telah kita lakukan.

```bash
commit 6d0f2d158e20d3b1f32fce655fe9b19f1b6d7386 (HEAD -> main, origin/main)
Author: Robby Pambudi <robby.pambudi10@gmail.com>
Date:   Thu Aug 17 14:47:19 2023 +0700

    initial commit
```

Anda juga dapat menggunakan perintah berikut untuk melihat perubahan yang terjadi pada commit.

```bash
git log -p -2 # -p (patch) -2 (jumlah commit yang akan ditampilkan) Menampilkan perubahan yang terjadi pada commit

git log --pretty=oneline # Menampilkan informasi commit dalam satu baris
git log --pretty=format:"%h - %an, %ar : %s" # Menampilkan informasi commit dengan format tertentu
```

## Push ke Remote Repository

Setelah melakukan commit, kita dapat melakukan push ke remote repository. Untuk melakukan push, kita dapat menggunakan perintah berikut:

```bash
git push -u <nama-remote> <nama-branch>
```

- `<nama-remote>` adalah nama remote repository yang akan kita gunakan. Pada contoh ini kita akan menggunakan remote repository dengan nama `origin`.
- `<nama-branch>` adalah nama branch yang akan kita gunakan. Pada contoh ini kita akan menggunakan branch `main`.

## Membuat Branch

![Alt text](assets/materi-2/merge.jpeg)

Begitulah suasana yang sangat diinginkan oleh para developer, tetapi tidak semua kasus seperti itu. Tapi yang perlu diingat adalah **Conflict Bukan Sebuah Masalah** tapi merupakan sebuah tantangan yang harus diselesaikan.

> Konflik dalam penggabungan (merge) adalah hal biasa. Anggap sebagai tantangan yang dapat meningkatkan kemampuan pengembangan Anda.

Back to topic, untuk membuat branch kita dapat menggunakan perintah berikut:

```bash
git branch <nama-branch>
```

Untuk melihat branch yang telah kita buat, kita dapat menggunakan perintah berikut:

```bash
git branch
```

#### Note:

```bash
git branch -a # Melihat semua branch yang ada
git branch -d <nama-branch> # Menghapus branch
git checkout <nama-branch> # Pindah ke branch
```

Selain itu, kita juga bisa membuat branch dan langsung melakukan *checkout*/berpindah langsung ke branch tersebut dengan command sebagai berikut

```bash
git checkout -b <nama-branch>
```

## Menggabungkan Branch (Merge)
Pada ``git local``, kita juga dapat menggabungkan branch dengan command utama sebagai berikut 

```bash
git merge <nama-branch>
```

Artinya adalah kita ingin menggabungkan branch ``<nama-branch>`` ke branch yang sedang kita gunakan saat ini. Misal kita berada di branch ``main`` dan kita menjalankan command berikut 

```bash
git merge fitur-1
```

Maka di branch **main** akan ada log baru yaitu ``fitur-1`` yang merupakan hasil dari merge tersebut.

### Latihan Menggabungkan Branch (Merge)
Untuk melakukan penggabungan branch ini, kita harus sudah mengikuti langkah-langkah diatas. Pastikan jika local sudah terhubung dengan server melalui ``remote``

- Pastikan kita memiliki branch utama yaitu ``main``
  ```bash 
  git checkout main
  ```

- Selanjutnya, mari membuat branch dan berpindah langsung ke branch tersebut
  ```bash
  git checkout -b fitur-1
  ```
  ![Merge Branch Example 1](assets/materi-2/merge-branch-example-1.png)

- Tambahkan file dengan nama ``example.php`` dan kode sebagai berikut
  ```php
  <?php  
  echo "Hello World!";  
  ?>  
  ```

- Setelah itu, lakukan commit sebagai berikut
  ```bash
  git add .
  git commit -m "menambahkan file example.php"
  git push -u origin fitur-1
  ```

  Disini kita akan melakukan push terhadap branch `fitur-1` yang dimana ada perbedaan degnan branch `main` yaitu adanya file baru di branch `fitur-1`. Sekarang kita ingin di branch `main` juga ada file baru tersebut.

- Mari kita berpindah ke branch utama kita yaitu `main`
  ```bash
  git checkout main
  ```

  Setelah berpindah, jalankan perintah berikut

  ```bash
  git merge fitur-1
  ```

  **BOOM...** Sekarang ada file baru yaitu ``example.php`` di branch main kita. Jangan lupa untuk melakukan **push** agar perubahan di local juga terjadi di server / github kita.

  ```bash
  git push
  ```

- Lakukan cek log graph sebagai berikut jika ingin mengetahui hasil akhir dari perubahan yang terjadi
  ```bash
  git log --graph --oneline
  ```
  ![Merge Branch Example 2](assets/materi-2/merge-branch-example-2.png)

Akhirnya kita telah menyelesaikan materi mengenai git local. Tetap semangat ya teman-teman 😀