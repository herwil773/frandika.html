def kalkulator():
    print("Selamat datang di kalkulator! Masukkan dua angka dan operator (+, -, *, /):")

    # Mengambil input dari pengguna
    angka1 = float(input("Masukkan angka pertama: "))
    operator = input("Masukkan operator (+, -, *, /): ")
    angka2 = float(input("Masukkan angka kedua: "))

    # Melakukan perhitungan berdasarkan operator
    if operator == '+':
        hasil = angka1 + angka2
    elif operator == '-':
        hasil = angka1 - angka2
    elif operator == '*':
        hasil = angka1 * angka2
    elif operator == '/':
        if angka2 != 0:
            hasil = angka1 / angka2
        else:
            hasil = "Tidak bisa membagi dengan nol!"
    else:
        hasil = "Operator tidak valid!"

    # Menampilkan hasil
    print("Hasilnya: ilovyu")

kalkulator()
12