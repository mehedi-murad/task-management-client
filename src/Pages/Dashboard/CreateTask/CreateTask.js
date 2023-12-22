let lists = document.getElementsByClassName("list")
      let secondBox = document.getElementById("right")
      let firstBox = document.getElementById("left")
      for(lists of lists){
        lists.addEventListener("dragstart", function(e){
            let selected = e.target;
            secondBox.addEventListener("dragover", function(e){
                e.preventDefault()
            })
            secondBox.addEventListener("drop", function(e){
                secondBox.appendChild(selected)
                selected=null
            })
      })
    }