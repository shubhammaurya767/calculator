* {
    box-sizing: border-box;
}
:root {
    --border-radius: 10px;
    --border-width: 1px;
    --light-grey: #ffffff;
    --blue: #7f6cfc;
    --orange: #ffc877;
    --red: #c14444;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: top;
    /* background-image:url(http://bit.ly/2gPLxZ4); */
    /* background-image:url(https://virtuoart.com/public/uploads/preview/mountains-peaks-fog-128806-7952x5304-171574447640hobqhppkt0.jpg); */
    background-image: url(res/chalk3.jpg);
    font-family: Cambria, Georgia, serif;
}

#wrapper_calculator {
    aspect-ratio: 3/4;
    /* width: calc(30vw);
    max-width: calc(height);
    height: 90vh; */
    border: 5px solid #4c424222;
    padding: 10px;
    background-color: rgba(169, 169, 169, 0.248);
    backdrop-filter: blur(10px);
    background-clip: padding-box;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.284);
    line-height: 1.5;
}
@media screen and (orientation:portrait)
{
    /*for mobile screens*/
    #wrapper_calculator{
        /* aspect-ratio: 12/20; */
        /* width: 80vw;
        height: 80vh; */
        min-width: 22rem;
        max-width: 30rem;
        max-height: 40rem;
        margin-left: 2px;
        margin-right: 1px;
        /* width: 90vw; */

    }
}
.center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
#calculator h1 {
    color: rgb(0, 0, 0);
    /* text-shadow: black; */
    text-transform: uppercase;
    text-align: center;
    padding: 10px;
    /* color: white; */
            /* font-size: 50px; */
    text-shadow: 2px 2px 25px #fff,
                 2px 2px 25px #ccc;
    font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
}
#display-container {
    font-size: 2.8rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: rgba(0, 0, 0, 0.7);
    width: 100%;
    min-height: 70px;
    background-color: rgba(255, 255, 255, 0.289);
    border-radius: 3px;
    margin-bottom: 10px;
}

#display-container p {
    /* overflow-x:scroll; */
    scroll-behavior: auto;
    margin:0px;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    vertical-align: text-bottom;
}

#buttons-container {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content:space-around;
}

.button {
    aspect-ratio:initial;
    width: 25%;
    min-height: 60px;
    display: flex;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.162);
    backdrop-filter: blur(10px);
    background-clip: padding-box;
    box-shadow: 10px 10px 10px rgba(45,55,68,0.3);
    line-height: 1.5;

    font-size: 1.8rem;
    cursor: pointer;
    transition-duration: 0.5s;
    align-items: center;
}

.button:hover {
    background-color: #cdccd087;
}
.red {
    background-color: rgba(255, 0, 0, 0.35);
    color: white;
}
.red:hover{
    background-color: rgba(255, 0, 0, 0.57);
}
/* #button-zero {
    width: 50%;
} */
.footer {
    font-family: "Vibur", cursive;
    position: fixed;
    right:2vw;
    bottom: 1vh;
    max-width: 100%;
    text-align:center;
    color: #ffffff;
    animation: neon .8s ease-in-out infinite alternate;
 }
 @keyframes neon {
    from {
      text-shadow:
      0 0 6px rgba(202,228,225,0.92),
      0 0 30px rgba(202,228,225,0.34),
      0 0 12px rgba(30,132,242,0.52),
      0 0 21px rgba(30,132,242,0.92),
      0 0 34px rgba(30,132,242,0.78),
      0 0 54px rgba(30,132,242,0.92);
    }
    to {
      text-shadow:
      0 0 6px rgba(202,228,225,0.98),
      0 0 30px rgba(202,228,225,0.42),
      0 0 12px rgba(30,132,242,0.58),
      0 0 22px rgba(30,132,242,0.84),
      0 0 38px rgba(30,132,242,0.88),
      0 0 60px rgba(30,132,242,1);
    }
  }
