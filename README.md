# Buku Submission Dicoding


### Initiate Server Running
```
    1. cp .env-example .env
    2. Fill the Variable on .env
    3. yarn install
    4. yarn build
    5. yarn start
```

## Objective Submission

1. [POST] /songs => 'Simpan' [DONE]
2. [GET] /songs => 'Get All' [DONE]
3. [GET] /songs/{bookId} => 'Get One By ID' [DONE]
4. [PUT] /songs/{bookId} => 'Update 1 By ID' [DONE]
5. [DELETE] /songs/{bookId} => 'Delete 1 Books' [DONE]
6. [GET] /songs/deleteAll => 'Delete all Records' [DONE] [CUSTOM]

StatusCode
```
400 => Gagal
500 => Gagal Sistem
201 => Sukses
200 => Sukses
404 => Tidak Ditemukan
```

Backend Specification
```
Tech Stack:
    -----------
    nodejs
    typescript
    hapijs
    noneid
    nodemon
    pm2
    sqlite3
    -----------
```
<center>
<table border="1">
    <tr>
        <th>Nama Script</th>
        <th>Kegunaan</th>
    </tr>
    <tr>
        <td>yarn dev</td>
        <td>Menjalankan Server menggunakan Typescript, digunakan untuk proses pada saat Development</td>
    </tr>
    <tr>
        <td>yarn build</td>
        <td>Generate Aplikasi dari Typescript ke Javascript</td>
    </tr>
    <tr>
        <td>yarn start</td>
        <td>Menjalankan Server menggunakan file Javascript Production</td>
    </tr>
</table>
</center>