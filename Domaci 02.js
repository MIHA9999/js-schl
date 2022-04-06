//DOMACI 02

//1. Ispisuje prosledjeni niz brojeva jedan ispod drugog.
niz.forEach(ispis => console.log(ispis));

// 2. Od prosledjenjog niza brojeva ispisuje samo parne
niz.forEach(odds => {
  if (odds % 2 == 0){
    console.log(odds);
  }
});

// 3. Racuna sumu prosledjenog niza
const arr = [4,5,6,8];
arr.reduce((accumulator, secondval) => accumulator + secondval);

// 4. Ispisuje koliko ima brojeva vecih od prvog elementa niza
const arr2 =[1,2,3,4,5];
const funckija = arr =>{
  let sum = 0;
  for (let i=1; i<arr.length; i++){
    if (arr[0]< arr[i]){
      sum++;
    }
  }
  console.log(sum);
}
funckija(arr2);