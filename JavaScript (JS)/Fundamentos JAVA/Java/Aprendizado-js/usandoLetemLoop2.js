const func = []

for (let i = 0; i <10; i++) {
    func.push(function() {
        console.log(i)
    })
}


//Como var não tem scopo de bloco, o valor que será passado será o último valor encontrado
func[2]()
func[8]()
