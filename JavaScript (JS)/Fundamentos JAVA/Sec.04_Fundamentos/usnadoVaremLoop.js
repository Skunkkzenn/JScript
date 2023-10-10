const func = []

for (var i = 0; i <10; i++) {
    func.push(function() {
        console.log(i)
    })
}

//Já com let os valores serão passados
func[2]()
func[8]()
