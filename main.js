let btn = document.querySelector(".btn")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")
let btn7 = document.querySelector(".btn7")
let btn8 = document.querySelector(".btn8")
let btn9 = document.querySelector(".btn9")
let btn10 = document.querySelector(".btn10")
let res1 = document.querySelector(".Ndv")
let res2 = document.querySelector(".io")
let res3 = document.querySelector(".Zk")
let res4 = document.querySelector(".ik")
let res5 = document.querySelector(".Δi")
let res6 = document.querySelector(".M")
let res7 = document.querySelector(".Mk")
let res8 = document.querySelector(".Md")
let res9 = document.querySelector(".Mcm")
let res10 = document.querySelector(".Iekv")
let Ndv
let Zk
let io
let ik
let Mk
let Δi
let M
let Md


btn.addEventListener('click', (e) => {
    let forOne = Number(document.querySelector(".one").value)
    let forTwo = Number(document.querySelector(".two").value)
    let forThree = Number(document.querySelector(".three").value)
    let forFour = Number(document.querySelector(".four").value)
    console.log(e.target);
    Ndv = forOne * ((forTwo * forThree * 3.14) / (30 * forFour))
    console.log(forOne);
    console.log(Ndv);
    res1.innerText = `Предварительный выбор двигателя ММ: N двигателя = ${Ndv.toFixed(2)} Вт`
})
btn2.addEventListener('click', (e) => {
    let forThree = Number(document.querySelector(".form2").value)
    let ndv = Number(document.querySelector(".formndv").value)
    io = ndv / forThree
    res2.innerText = `Определение общего передаточного отношения: i0 = ${io.toFixed(0)}`
})
btn3.addEventListener('click', (e) => {
    let forK = Number(document.querySelector(".formZk").value)
    let z = forK - 1
    let i = forK - 1
    if (z >= 1 && z <= 11) {
        z = 17;
    }
    if (i === 1 && forK === 2) {
        i = 1.12;
    } else if (i === 2 && forK === 3) {
        i = 1.4;
    } else if (i === 3 && forK === 4) {
        i = 1.8;
    } else if (i === 4 && forK === 5) {
        i = 2.24;
    } else if (i === 5 && forK === 6) {
        i = 2.28;
    } else if (i === 6 && forK === 7) {
        i = 3.55;
    } else if (i === 7 && forK === 8) {
        i = 4.5;
    }
    Zk = z * i
    res3.innerText = `Определение чисел колес зубьев редуктора: Zk = ${Zk.toFixed(2)}`
})
btn4.addEventListener("click", () => {
    let forK = Number(document.querySelector(".formiK").value)
    
    if (forK === 1) {
        forK = 25;
    } else if (forK === 3 || forK === 5 || forK === 7) {
        forK = 34;
    } else if (forK === 9) {
        forK = 36;
    } else if (forK === 11) {
        forK = 60
    }
    
    ik = forK / Zk
    
    res4.innerText = `Определение фактического  передаточного отношения: ik = ${ik.toFixed(2)}`
})
btn5.addEventListener('click',()=>{
    
    let i0f = 327
    Δi = (Math.abs(io - i0f) * 100) / io  
    res5.innerText = `Определение погрешности передаточного отношения: Δi = ${Δi.toFixed(2)}%`
})

btn6.addEventListener("click", () => {
    let MΣ = 1+0.3*10
       M = MΣ        

    res6.innerText = `Общий момент нагрузки на выходном валу редуктора : M = ${M.toFixed(2)} Н/м`
})
btn7.addEventListener('click',()=>{
    let forK = Number(document.querySelector(".formK").value)

    
    const nk = 0.98;
    const np = 0.98;
    if (forK === 7) {
        forK = 3.71;
    } else if (forK === 6) {
        forK = 3.53;
    } else if (forK === 5) {
        forK = 2.12;
    } else if (forK === 4 || forK === 3 || forK === 2) {
        forK = 2.00;
    } else if (forK === 1) {
        forK = 1.47;
    }

    Mk = M/(forK*nk*np)
    res7.innerText = `
Крутящий момент на k-ом валу:
Mk = ${Mk.toFixed(2)} Н/м
`
})
btn8.addEventListener('click',()=>{
    let forKm = Number(document.querySelector(".formKm").value)
    let forJh = Number(document.querySelector(".formJh").value)

    

    const num101 = 1.3 * (10**(-6));
    Md = ((1 + forKm) * num101 + (forJh / io**2))*10*io;
    res8.innerText = `
Рассчитаем приведенный динамический момент:
Mdпр = ${Md.toFixed(2)} Н/м
`
})
btn9.addEventListener('click',()=>{
    let forMc = Number(document.querySelector(".Mc").value)


    

    
    Mcm = forMc / (io * 0.98**14)
    res9.innerText = `
Рассчитаем приведенный статический момент:
Mcmпр = ${Mcm.toFixed(3)} Н/м
`
})
btn10.addEventListener('click',()=>{
    let ni1 = Number(document.querySelector(".ni1").value)
    let ni2 = Number(document.querySelector(".ni2").value)
    let ni3 = Number(document.querySelector(".ni3").value)
    let ni4 = Number(document.querySelector(".ni4").value)
    let ni5 = Number(document.querySelector(".ni5").value)
    let ni6 = Number(document.querySelector(".ni6").value)
    let ni7 = Number(document.querySelector(".ni7").value)
    let nt1 = Number(document.querySelector(".nt1").value)
    let nt2 = Number(document.querySelector(".nt2").value)
    let nt3 = Number(document.querySelector(".nt3").value)
    let nt4 = Number(document.querySelector(".nt4").value)
    let nt5 = Number(document.querySelector(".nt5").value)
    let nt6 = Number(document.querySelector(".nt6").value)
    let nt7 = Number(document.querySelector(".nt7").value)

    const a = ((ni1**2 * nt1)+(ni2**2 * nt2)+(ni3**2 * nt3)+(ni4**2 * nt4)+(ni5**2 * nt5)+(ni6**2 * nt6)+(ni7**2 * nt7));
    const b = (nt1 + nt2 + nt3 + nt4 + nt5 + nt6 + nt7);
    
    let Iэкв =  Math.pow((a / b), 0.5);
    
    res10.innerText = `
    Рассчитаем Iэкв:
    Iэкв = ${Iэкв.toFixed(2)} A
    `

})