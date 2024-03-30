<header>
<h1>Test membuat project backend dengan Express Js yang diberikan oleh PT.VASCOMM SOLUSI TEKNOLOGI</h1>
</header>


<hr/>



<h4>
Dibangun dengan Menggunakan Express Js TypeScript sebagai framework untuk membangun API yang bisa dikonsumsi oleh Front End. 

<br/>
<br/>

di project ini mengimplementasikan OAuth2 Bearer Token dengan bantuan JWT (Json Web Token) dan Prisma ORM sebagai koneksi ke database MySQL
</h4>

<br/>

<h4>disini juga mengimplementasikan Authentikasi dan Authorize role untuk beberapa end point, sehingga mampu melindungi end point tersebut dari serangan</h4>


<br/>


<h4>Beberapa Fitur yang ada diproject ini antara lain: </h4>
<ul>
    <li>OAuth2 Bearer Token menggunkan JWT</li>
    <li>Fitur Send Email untuk Mengirimkan Email yang berisi random password kepada user yang mendaftar atau didaftarkan oleh admin</li>
    <li>Fitur Soft Delete untuk User Yang ingin di delete oleh admin sehingga tidak langsung dihard delete oleh admin</li>
    <li>fitur approve register user, hanya dapat dilakukan oleh admin untuk user yang mendaftar secara mandiri</li>
</ul>


<br/>
<br/>
<br/>

<h2>Cara Menjalankan Project Di Local:</h2>


<h3>
    <ol>
        <li>Git Clone project ini</li>
        <li>"npm Install" pada direktori project ini diterminal</li>
        <li>sesuaikan file yang ada di example.env dengan settingan milik masing-masing, kemudian ubah nama "example.env" menjadi ".env"</li>
        <li>jalankan perintah "npx prisma db seed" maka secara otomatis prisma akan membuat migrasi dan melakukan seeding data starter untuk role & user admin</li>
        <li>jalankan project menggunakan "npm run dev" ataupun "npm run start"</li>
    </ol>
</h3>

<br/>
<br/>
<br/>

<h1>
Terimakasih sudah mau membaca🙂</h1>
