// tapşırıq-1 
let a=0
let b=0
let c=0
if (a <= 0 || b <= 0 || c <= 0) {
    console.log("üçbucağın tərəfi 0 və ya mənfi dəyər ala bilməzcle");
} else if (a + b > c && a + c > b && b + c > a) {
    console.log("Bu verilənlər üçbucaq əmələ gətirə bilər");
} else {
    console.log("Bu verilənlər üçbucaq əmələ gətirə bilməz");
}
