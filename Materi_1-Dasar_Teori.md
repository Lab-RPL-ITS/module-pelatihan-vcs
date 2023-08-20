# Dasar Teori

## Pengenalan Version Control System 

### Version Control System

![Git Remote](assets/materi-1/pendahuluan-1.jpeg)

Pernakah kalian bekerja sama dengan orang lain dalam sebuah projek ? Jika pernah, apakah kalian pernah menunggu suatu pekerjaan diselesaikan oleh orang lain sebelum kalian dapat mengerjakan pekerjaan kalian ? 

![Git Remote](assets/materi-1/pendahuluan-2.jpeg)

Sampai ternyata semua orang tidak sabar mengerjakan pekerjaan mereka masing-masing, tanpa mengerti pekerjaan yang lain sehingga terdapat banyak versi pekerjaan yang tidak berkorelasi satu sama lain dan kamulah yang harus membaca semuanya satu per satu dan menjadikan semua file itu menjadi satu padanan yang utuh. 

Selain itu, ketika menghadapi revisi berulang kali, seringkali file jadi menumpuk dan membuat penyimpanan penuh.

![Git Remote](assets/materi-1/pendahuluan-3.jpeg)

Pekerjaan di atas berjalan dengan tidak efektif dan pasti menjadi hal yang melelahkan bukan ?

Oleh karena itu, `Version Control System` hadir untuk menyelesaikan permasalahan ini.

### Berbagai layanan Version Control System

![Git Remote](assets/materi-1/vcsprovider.jpeg)

Terdapat berbagai macam layanan Version Control System, namun yang paling populer dan paling banyak digunakan oleh developer adalah Git. Pada kesempatan kali ini, kita akan belajar mengenai Git sebagai Version Control System.

## Git dan GitHub

### Git sebagai Version Control System

![Git Remote](assets/materi-1/git.png)

Git adalah salah satu sistem pengontrol versi (Version Control System) yang diciptakan oleh Linus Torvalds dimana pada awalnya digunakan untuk pengembangan kernel Linux. Git berguna untuk memanajemen file-file dalam pengembangan *source code* dan melakukan pelacakan terhadap perubahan-perubahan yang terjadi.

#### Mengapa menggunakan Git ?
Git mempermudah kita dalam memanajemen *source code*, tetapi apa saja yang sebenarnya git tawarkan untuk para *developer* ?
- Pengembangan terdistribusi
- Dukungan kolaborasi antar *developer*
- Gratis dan *open source*
- Pengontrolan dan pelacakan perubahan *source code* 
- Peningkatkan efisiensi pekerjaan
- Peningkatkan produktivitas
- Populer dan mempunyai komunitas yang besar

### GitHub sebagai layanan pengembangan perangkat lunak

![Git Remote](assets/materi-1/github.png)

GitHub merupakan sebuah *platform* dan layanan berbasis *cloud* untuk pengembangan perangkat lunak dan pengontrol versi berbasis Git. Github menyediakan berbagai layanan pengontrol versi terdistribusi dan berbagai manajemen pekerjaan. 

#### Mengapa menggunakan GitHub ?
Terdapat beberapa alasan mengapa GitHub menjadi pilihan para *developer* dalam pengembangan perangkat lunak, yaitu
- Mempermudah untuk melakukan kontribusi terhadap projek yang bersifat *open source*, hanya dengan melakukan fork dan mengirimkan perubahan melalui pull request.
- Menyediakan berbagai bantuan dan panduan untuk berbagai hal yang ada di dalam GitHub sehingga penggunaannya makin mudah dan terarah
- Melakukan pelacakan terhadap segala perubahan berkat Git yang menjadi basis pengontrol versi dari GitHub
- Terintegrasi dengan berbagai *platform*, salah satunya adalah Visual Studio Code, *code editor* populer yang banyak digunakan oleh para *developer*
- Menjadi platform yang dapat dijadikan sebagai portofolio bagi para *developer* 
- Mempunyai komunitas yang besar sehingga berbagai portofolio dan pekerjaan dapat menjangkau berbagai macam individu sehingga dapat menjadi sarana *branding* diri yang baik

## Terminologi dalam Git
![Git Remote](assets/materi-1/meme.png)
Dalam Git, terdapat berbagai terminologi (istilah) yang sering digunakan, berikut istilah dan penjelasannya
- Repository : Tempat git melacak perubahan, dalam konteks Git dapat juga dianggap sebagai folder tempat bekerja
- Branch : Cabang pada Git
- Commit : Perubahan file yang telah disimpan/snapshot dari repository
- Merge : Proses menggabungkan beberapa branch
- Hash : Penanda unik pada commit
Remote : Sumber yang memiliki repository
- Clone : Mengambil repository dari remote
- Push : Mengirimkan commit ke repository
- Pull : Mengambil commit dari repository

## Git Workflow
Untuk memberikan gambaran bagaimana Git bekerja, berikut bagan siklus kerja dalam Git, 

![Git Remote](assets/materi-1/gitworkflow.png)

Pada Git, kita akan melakukan pengaturan (setup) awal projek kita kemudian tiap *developer* akan melakukan *checkout* terhadap branch (cabang) masing-masing dan mulai mengerjakan tugasnya. *Developer* akan melakukan *editing* terhadap projek terkait kemudian memasukkan (add) perubahan-perubahan yang telah dibuat kedalam *staging area* yang selanjutnya akan dilakukan permanen *snapshot* (commit) terhadap perubahan yang telah dimasukkan ke *staging area* pada local repository. Setelah itu, dilakukan *push* untuk memperbarui kumpulan *snapshot* pada remote repository.