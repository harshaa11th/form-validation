function input(e) {
            e.style.backgroundColor="yellow";
        }
        function reset1(e) {
            e.style.backgroundColor="white";
        }
        

        function fullName(name)
        {
            var n = name.value
            var re = /^[a-zA-Z]+$/

            if(n.match(re)==null)
            {
                alert('Only alphabets are allowed')
                name.value=n.substring(0, n.length-1)
            }
            else
            {
                var f = document.getElementById("fname").value;
                var m = document.getElementById("mname").value;
                var l = document.getElementById("lname").value;
                document.getElementById("sname").value = f + " " + m + " " + l;
            }
        }
        function checkValidEmail(email)
        {
            var e = email.value
            var re = /^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([a-z]+)$/

            if(e.match(re)==null)
            {
                alert('Enter valid mail')
            }
        }

