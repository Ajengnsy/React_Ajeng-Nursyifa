# React_Ajeng-Nursyifa

React Hooks adalah fitur yang diperkenalkan dalam React 16.8 yang memungkinkan Anda menggunakan state dan fitur-fitur React lainnya tanpa perlu menulis kelas. Dengan Hooks, Anda dapat membuat komponen fungsional yang lebih sederhana, terstruktur, dan mudah dipelihara.

**Mengapa Menggunakan Hooks?**

- **Komponen Fungsional yang Lebih Sederhana:** Hooks memungkinkan Anda menulis komponen fungsional yang lebih bersih dan mudah dibaca.
- **Reusabilitas Kode:** Custom Hooks memungkinkan Anda mengabstraksi logika yang sering digunakan, meningkatkan modularitas kode.
- **Pengelolaan State yang Lebih Baik:** `useState` dan `useReducer` memberikan cara yang fleksibel untuk mengelola state dalam komponen fungsional.
- **Integrasi dengan Fitur React Lainnya:** Hooks dapat diintegrasikan dengan fitur React lainnya seperti context, ref, dan effect.

**Hooks Bawaan yang Sering Digunakan**

- **useState:**

  - Digunakan untuk menambahkan state ke dalam komponen fungsional.
  - Contoh:

    ```javascript
    import { useState } from "react";

    function Counter() {
      const [count, setCount] = useState(0);
      // ...
    }
    ```

- **useEffect:**
  - Digunakan untuk melakukan efek samping seperti fetch data, manipulasi DOM, atau subscribe ke event.
  - Menggantikan lifecycle methods seperti `componentDidMount`, `componentDidUpdate`, dan `componentWillUnmount`.
- **useContext:**
  - Digunakan untuk mengakses data dari context tanpa prop drilling.
- **useReducer:**
  - Digunakan untuk mengelola state yang kompleks dengan reducer.
- **useRef:**
  - Digunakan untuk membuat ref ke elemen DOM atau menyimpan nilai yang persisten di antara render.

**Membuat Custom Hooks**
Anda dapat membuat custom hooks untuk mengabstraksi logika yang sering digunakan. Misalnya, untuk fetch data:

```javascript
import { useState, useEffect } from "react";

function useFetch(url) {
  // ...
}
```
