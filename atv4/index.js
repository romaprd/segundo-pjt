
        function calcular(){
            var numb1 = parseFloat(document.getElementById("num1").value)
            var numb2 = parseFloat(document.getElementById("num2").value)
            var resultado = document.getElementById("resultado")
            resultado.textContent = (numb1 / (numb2 * numb2)).toFixed(3)
        }
        