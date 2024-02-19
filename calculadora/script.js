    const pantalla = document.querySelector(".resultado");

    const botones = document.querySelectorAll("input[type= 'button']"); /*con esto tenemos acceso a todos  los botones */
                /*El querySelectoAll se nos hace un array*/
    botones.forEach(boton => { /*aca con cada boton hacemos que*/
        boton.addEventListener("click", () => { /*con el aEL que con cada click se ejecute lo sgt */
            const botonApretado = boton.value; /*aca en la var botonApretado guardamos el valor del boton que se presiona*/
           
            if (boton.id =="borrarTodo"){
                pantalla.textContent = "0";
                return;
            }
            
            if (boton.id =="borrar1"){
                if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                    pantalla.textContent = "0";
                }else{
                    pantalla.textContent = pantalla.textContent.slice(0,-1); //slice es para cortar string, deja afuera el ult en este caso
                }
                return;
            }
            if (boton.id === "igual"){
                try {
                    pantalla.textContent = eval(pantalla.textContent); //eval realiza las operaciones matematicas que encuentra en un string 
                    return;
                } catch {
                   pantalla.textContent = "Error!"; 
                }
                return;
                
            }

            if(pantalla.textContent ==="0" || pantalla.textContent === "Error!"){ //
                pantalla.textContent = botonApretado;
            }else{
                pantalla.textContent += botonApretado; /*y añadimos a la pantalla con el += va concatenando los valores*/
            }

            

        });
    });
