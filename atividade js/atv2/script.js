
function calc(id1, id2, respid, operador){
        var num1 = parseFloat(document.getElementById(id1).value)
        var num2 = parseFloat(document.getElementById(id2).value)
        var resultado
        
        switch (operador) {
            case "+":
                resultado = num1 + num2
                
                break;
                case "-":
                    resultado = num1 - num2
                
                break;
            
                case "*":
                    resultado = num1 * num2
        
        
                break;
                case "/":
                    if(num2 !== 0){
                        resultado  =  num1 / num2
                    }else{
                        resultado = "erro: divisão por zero não existe"
                    }
                    break;
                 default:
                resultado = "operador inválido"
        }
        
                
        
        document.getElementById(respid)

    }
    