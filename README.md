## React Text Writer

Ini adalah package react untuk writer animation text. Tulisan kalian bisa seperti diketik satu persatu
Fleksibilitasnya juga kami berikan jika menginginkan text yang ingin kalian munculkan lebih dari satu

### Cara install
jika kalian pengguna npm
`npm i --save react-text-writer`

---

dan jika kalian pengguna yarn
`yarn add react-text-writer`

### Cara penggunaan
import package
```javascript
import Typewriter from 'react-text-writer'
// components
const Index = () => {
    return (
        <Typewriter
            text={
                [
                "Kata pertama",
                "Kata kedua"
                ]
            }
            speed={100}
            isLoop
            loopDelay={4000}
            textClassName="text-slate-800"
        />
    )
}
```

### Keterangan
| Properti      | Penjelasan                                                            | Default |
|---------------|-----------------------------------------------------------------------|---------------|
| text          | String atau Array berisi teks yang akan ditampilkan secara berurutan  | "itpohgero"   |
| speed         | Kecepatan tulis (dalam milidetik) antara setiap karakter              | 100           |
| isLoop        | Menentukan apakah teks akan diulang setelah selesai                   | false         |
| loopDelay     | Waktu tunda (dalam milidetik) sebelum pengulangan teks dimulai        | 2000          |
| className     | Nama kelas CSS untuk mengatur gaya tampilan teks                      | ''            |


created by wahyu agus arifin - owner itpohgero.com