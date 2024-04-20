var tbl = document.createElement("table")
tbl.className= "table"


    var thd = document.createElement("thead")
    thd.className="thead-dark"

    function tr_fn(){
        var tr_elem = document.createElement("tr")
        return tr_elem
    }

    function th_fn(scope_val,content){
        var th_elem = document.createElement("th")
        th_elem.scope=scope_val
        th_elem.innerHTML=content
        return th_elem
    }

    function td_fn(content){
        var td_elem = document.createElement("td")
        td_elem.innerHTML = content
        return td_elem
    }

        var tr = tr_fn()
            var th1 = th_fn("col","S.No")
            var th2 = th_fn("col","First")
            var th3 = th_fn("col","Last")
            var th4 = th_fn("col","Handle")

        tr.append(th1,th2,th3,th4)
    thd.appendChild(tr)

    var tbdy = document.createElement("tbody")
        var tr1 = tr_fn()
            var th1a = th_fn("row","1")
           
            var td1a = td_fn("Mark")
            var td1b = td_fn("Otto")
            var td1c = td_fn("@mdo")

        tr1.append(th1a,td1a,td1b,td1c)

        var tr2 = tr_fn()
            var th2a = th_fn("row","2")
            
            var td2a = td_fn("Jacob")
            var td2b = td_fn("Thornton")
            var td2c = td_fn("@fat")

        var tr3 = tr_fn()
            var th3a = th_fn("row","3")
            
            var td3a = td_fn("Larry")
            var td3b = td_fn("the Bird")
            var td3c = td_fn("@twitter")    
            
        tr1.append(th1a,td1a,td1b,td1c)
        tr2.append(th2a,td2a,td2b,td2c)
        tr3.append(th3a,td3a,td3b,td3c)
    tbdy.append(tr1,tr2,tr3)

tbl.append(thd,tbdy)
document.body.append(tbl)