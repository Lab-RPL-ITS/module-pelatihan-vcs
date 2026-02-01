# Dasar Teori

## Pengenalan Version Control System

### Apa itu Version Control?

Alice baru saja mendapat tugas membuat modul mengenai version control system untuk
mahasiswa baru. Tentu saja, membuat modul bukanlah pekerjaan yang selesai dalam
sekali duduk. Di pendahuluan, Alice menjelaskan kegunaan dan macam-macam version
control system yang tersedia. Beberapa hari kemudian setelah Alice menulis beberapa
bab pada modul, dia ingin membuat modulnya lebih to-the-point, sehingga pendahuluan
tadi dihapus untuk mempersingkat. Ketika modul hampir selesai ditulis, Alice
tiba-tiba menyesal dan ingin mengembalikan pendahuluan yang sebelumnya dihapus.
Apa boleh buat 😞☝️

Agar kejadian ini tidak terulang lagi, Alice memutuskan untuk menyimpan
perubahan-perubahan yang terjadi dalam pembuatan modul, sehingga Alice bisa mengembalikan
versi modul ke waktu tertentu atau mengembalikan tulisan yang dihapus pada saat tertentu.

![](assets/materi-1/git-single-dev-analogy.png)

Pada versi 6, Alice menghapus suatu bagian dalam modul. Apabila di kemudian hari Alice
tidak jadi ingin menghapus bagian ini, maka Alice cukup melihat versi modul sebelum
bagian tersebut dihapus.

Kamu baru saja mempelajari konsep version control. Version control pada kasus ini
diterapkan agar penulis dapat melihat kondisi tulisan pada banyak versi yang dibuat
pada waktu yang berbeda-beda.

Version control bisa saja diterapkan pada suatu literatur, namun bidang lain yang
cocok untuk diterapkan version control adalah pemrograman. Bayangkan jika kamu
ditugaskan untuk membuat website toko online. Kamu mungkin akan memulai pembuatan
website dengan membuat skema database, membuat sistem registrasi dan login, fitur
menambah dan mengedit barang jualan, fitur melihat dan membeli barang, dan seterusnya.
Setiap fitur sendiri pun sebenarnya bisa dipecah menjadi tugas-tugas yang lebih kecil.
Version control system dapat membantu kamu sebagai programmer untuk melacak setiap
perkembangan dalam pengembangan website yang ingin dibuat.

Tentu saja, pengembangan website tidak akan semulus itu. Ketika mengerjakan fitur
penambahan barang, bisa saja kamu ingin merubah sistem registrasi yang sebelumnya
telah kamu buat. Ketika mengerjakan fitur pembelian, bisa saja kamu menemukan masalah
fatal pada sistem penambahan barang. Ketika kamu ingin menambahkan sesuatu pada sistem
tertentu, bisa saja hal tersebut malah membuat website menjadi tidak stabil. Version
control system membatu programmer untuk menyelesaikan permasalahan seperti ini. Bayangkan
saja jika kamu menggunakan metode version control dengan seperti Alice dengan modulnya,
atau tidak menggunakan metode version control sama sekali, tentu saja kamu akan sangat
kesulitan apabila menemui masalah-masalah di atas.

### Version Control System untuk Kolaborasi

![](assets/materi-1/git-group-assignment-analogy.png)

Dalam banyak kasus, pembuatan suatu perangkat lunak tidak dikerjakan dan diselesaikan
oleh satu orang saja. Kali ini, Alice kembali ditugaskan untuk menulis modul mengenai
software testing. Karena materinya lebih banyak, maka Bob dan Charlie ditugaskan untuk
membantu Alice dalam penyusunan modul. Mengacu pada contoh sebelumnya, bagaimana
kelihatannya jika version control dilakukan secara manual?

![](assets/materi-1/git-multi-dev-analogy.png)

Dari sini sudah bisa terlihat bagaimana metode tersebut dapat menyebabkan potensi
masalah, bukan? Untuk mengatasi permasalahan tersebut, penggunaan software version control system dapat membantu mengelola dan mengontrol versi pekerjaan secara efisien, baik dalam pengembangan perangkat lunak maupun literatur seperti modul ini.

## Git

### Git sebagai Version Control System

Git adalah salah satu dari banyak version control system yang tersedia di pasaran.
Git melacak perubahan-perubahan yang terjadi pada source code ketika fitur baru
ditambahkan oleh developer.

Mengapa menggunakan Git? Git sebelumnya dijelaskan sebagai alat untuk mempermudah
manajemen source code, tapi apa saja yang ditawarkan oleh Git?

- Model terdistribusi
- Dukungan kolaborasi antar developer
- Gratis dan open source
- Pelacakan perubahan pada source code dilakukan secara efisien
- Meningkatkan produktivitas dan efisiensi pekerjaan
- Populer dan memiliki komunitas serta dukungan yang besar

Untuk memahami cara kerja Git, penting bagi developer untuk mengetahui istilah-istilah
yang sering digunakan dalam Git.

#### Repository

![](assets/materi-1/repository.png)

Repository adalah tempat Git melacak perubahan. Umumnya, suatu repository berisi
direktori kerja suatu proyek pengembangan perangkat lunak. Misalnya, ketika kita ingin
membangun aplikasi berbasis web, maka repository berisi seluruh file dan folder yang
diperlukan untuk membangun web tersebut.

#### Commit

Commit adalah perubahan-perubahan pada file yang telah disimpan di repository. Ketika
membangun suatu perangkat lunak, tentu saja produk akhir tidak akan selesai dalam
satu kali pengerjaan. Umumnya, seorang developer mungkin akan membuat atau mengubah
beberapa file untuk membangun suatu fitur atau bagian dari fitur. Proses inkremental
seperti ini dapat "direkam" dengan fitur pada commit. Setiap developer yang memiliki
akses terhadap repository kemudian dapat melihat sejarah atau timeline commit yang
dilakukan selama project berlangsung.

![](assets/materi-1/git-logs.png)

Commit juga menyimpan perubahan-perubahan apa saja yang terjadi pada file (termasuk
penambahan dan penghapusan file), metadata mengenai perubahan (seperti perubahan
apa yang dilakukan dan mengapa ia dilakukan), siapa yang melakukannya, dan kapan
commit dilakukan.

![](assets/materi-1/git-diff.png)

#### Revert

Misalkan seorang developer melakukan commit pada repository yang menyebabkan terjadinya
bug yang fatal pada program ketika dijalankan. Developer dapat melakukan "undo" dan
mengembalikan state repository menuju ke commit terakhir yang tidak menyebabkan bug.
Terdapat beberapa strategi untuk mencapai hal ini, dan fungsi revert pada Git adalah
salah satu cara untuk menggapainya.

#### Clone

Git clone pada dasarnya bekerja seperti download atau copy-paste pada repository.
Ingat model terdistribusi dari Git? Keistimewaan dari Git adalah, developer dapat
menyalin suatu repository dari suatu server pusat (juga disebut remote repository atau
upstream), bekerja dengan kode secara offline, dan menyinkronkan repository lokal dengan
server pusat secara berkala atau ketika terdapat perubahan yang ingin disinkronkan.

#### Pull dan Push

Pull dan push adalah fitur untuk menyinkronkan perubahan pada repository lokal dan pusat.
Pull, ketika dijalankan, secara sederhana akan menanyakan server pusat "apakah terdapat
commit baru atau perubahan lain yang terjadi sejak terakhir saya menyinkronkan repository
lokal dengan pusat?". Jika terdapat perubahan, maka perubahan tersebut akan disinkronkan ke repository lokal dari repository pusat.

Push bekerja secara berlawanan dengan pull. Jika pull berfungsi untuk "menarik" perubahan
dari server pusat ke repository lokal, maka push bekerja dengan memberitahu server pusat
"saya punya commit baru di repository lokal, tolong sinkronkan commit ini dengan server
pusat sehingga developer lain dapat melihat pekerjaan saya".

#### Branch

![](assets/materi-1/branch-1.png)

Dalam suatu project besar di mana terdapat beberapa developer yang bekerja untuk
membangun suatu fitur, akan sangat membantu jika developer tersebut dapat berfokus
pada pekerjaannya sendiri tanpa terganggu dengan commit dari developer yang membangun
fitur lain.

Fitur branch pada Git memungkinkan developer untuk menyimpan snapshot dari kondisi
repository pada saat tertentu, sehingga developer dapat bekerja pada fitur tertentu
tanpa distraksi. Dengan branch, developer dapat mengerjakan suatu fitur secara
terisolasi dari branch utama (atau branch lain), sehingga jika terdapat kesalahan,
perubahan tersebut dapat di-revert tanpa berdampak pada branch lain. Apabila di kemudian
hari fitur yang sedang dikerjakan ternyata tidak diperlukan atau rusak, branch dapat
dihapus dengan aman.

Sebagai contoh, jika mengacu pada contoh modul di awal, Alice, Bob, dan Charlie mungkin
mendapat pembagian bab yang perlu ditulis. Pada kasus ini, mereka dapat membuat setiap
bab sebagai branch-nya sendiri. Apabila ternyata suatu bab tidak diperlukan atau dalam
pengerjaannya terdapat kesalahan, commit pada branch tersebut dapat di-revert secara
independen dan branch dapat dihapus tanpa mengganggu pengerjaan bab lain.

#### Checkout

Misalkan Alice mengerjakan bab 1 pada branch bab-1 dan Bob mengerjakan bab 2 pada branch
bab-2, bagaimana cara Alice dapat melakukan revisi pada bab 2, jika ia bekerja pada branch
bab-1? Git checkout memungkinkan Alice untuk "berpindah" ke branch bab-2 dan melakukan
commit pada branch tersebut.

#### Merge

Sebelumnya dijelaskan bahwa branch pada Git memungkinkan developer untuk bekerja pada
suatu fitur secara terisolasi dari branch utama (atau branch lainnya). Namun, bagaimana jika fitur yang dikerjakan sudah selesai dan ingin diintegrasikan
pada branch utama?

![](assets/materi-1/branch-2.png)

Merging pada Git adalah proses untuk menggabungkan perubahan-perubahan yang terjadi
pada suatu branch ke branch lainnya (tidak mesti ke branch utama). Menggunakan perumpamaan
penyusunan modul sebelumnya, dapat diibaratkan bahwa branch adalah file dokumen modul yang
dikerjakan Alice, Bob, dan Charlie secara individu, sedangkan merging adalah proses
menggabungkan dokumen-dokumen (branch-branch) tersebut menjadi satu.

#### Conflict

![](assets/materi-1/merge-conflict-meme.png)

Katakanlah modul bab 1, 2, dan 3 sudah selesai dikerjakan. Alice kemudian ditugaskan
untuk mengerjakan bab 4 dan Bob ditugaskan untuk mengerjakan bab 5, masing-masing pada
branch yang berbeda. Di tengah pengerjaan, Alice dan Bob memiliki ide untuk merevisi
bab 3, sehingga branch mereka sama-sama mengandung perubahan pada bagian yang sama
dengan hasil yang berbeda. Ketika branch bab 4 dan bab 5 di-merge, Git tidak dapat
menentukan perubahan mana yang harus digunakan. Situasi inilah yang disebut conflict.

Conflict adalah konsep yang agak sulit dijelaskan secara tekstual dan akan lebih mudah
dipahami ketika seorang developer mengalaminya secara langsung. Look forward to it 😉.

### Git Workflow

Untuk memberikan gambaran bagaimana Git bekerja, berikut bagan siklus kerja dalam Git:

![Git Remote](assets/materi-1/gitworkflow.png)

Pada Git, kita akan melakukan pengaturan (setup) awal proyek. Selanjutnya, tiap developer
melakukan checkout terhadap branch (cabang) masing-masing dan mulai mengerjakan tugasnya.
Perubahan yang dibuat kemudian dimasukkan (add) ke dalam staging area, lalu disimpan
sebagai snapshot permanen (commit) pada local repository. Setelah itu, dilakukan push
untuk memperbarui kumpulan snapshot pada remote repository.

## GitHub

![](assets/materi-1/github-homepage.png)

GitHub hadir sebagai solusi untuk mempermudah penggunaan Git dalam lingkungan
kolaboratif. Dalam pengembangan perangkat lunak, kolaborasi sering kali melibatkan
banyak developer yang bekerja pada satu repository yang sama. Dengan GitHub,
repository dapat disimpan pada server yang dikelola secara profesional dan dapat
diakses oleh banyak developer, sehingga proses kolaborasi dapat dilakukan dengan
lebih terstruktur dan mudah.

![](assets/materi-1/github-dashboard.png)

Dengan akun GitHub, kita dapat menyimpan repository pada server GitHub sehingga
repository tersebut dapat bertindak sebagai remote repository. Developer lain yang
memiliki akses dapat melihat repository tersebut serta melakukan commit, branch,
dan perubahan lainnya. Selain itu, GitHub menyediakan interface berbasis web yang
lebih ramah pengguna, sehingga developer dapat melihat perubahan kode, riwayat
commit, dan aktivitas repository tanpa harus selalu menggunakan command line.

![](assets/materi-1/github-commits.png)

GitHub juga menyediakan berbagai fitur untuk mendukung kolaborasi dalam pengembangan
perangkat lunak, seperti pull request dan code review, yang membantu developer
bekerja bersama dengan lebih terkoordinasi. Namun, karena keterbatasan waktu dalam
satu kali pelatihan, tidak semua fitur tersebut akan dibahas. Oleh karena itu, pada
materi ini kita akan berfokus pada fitur-fitur inti GitHub yang paling sering
digunakan dalam workflow pengembangan perangkat lunak berbasis Git.
