
// function proxytiaObject(name, role, weapon) {
//     var proxytia = {
//       ksatria: ['pedang', 'tombak'],
//       tabib: ['gada'],
//       penyihir: ['tongkat']
//     }
//     var ksatria = proxytia.ksatria;
//     var tabib = proxytia.tabib;
//     var penyihir = proxytia.penyihir;
//     // Write your code here
//     var senjata = false;
//     var peran = false;

//         if(role === 'ksatria'){
//             peran = true;
//             if(weapon === ksatria[0] || weapon === ksatria[1] ){
//                 senjata = true;
//             }
//         }else if(role === 'tabib'){
//             peran = true;
//             if(weapon === tabib[0] ){
//                 senjata = true;
//             }
//         }else if(role === 'penyihir'){
//             peran = true;
//             if(weapon === penyihir[0] ){
//                 senjata = true;
//             }
//         }
//     if(!peran){
//         return 'Role invalid';
//     }
//     if(!senjata){
//         return 'Senjata invalid'
//     }

//     return 'Selamat datang di proxitia ' + role + ' ' + name +',' + ' gunakan ' + weapon +'mu ' + 'untuk bermain';
        
//   }
  

function proxytiaObject(name, role, weapon) {
    var proxytia = {
        ksatria: ["pedang", "tombak"],
		tabib: ["gada"],
		penyihir: ["tongkat"]
	};
    
	if (proxytia[role] === undefined) return "Role invalid";
	else {
        for (let i = 0; i <= proxytia[role].length; i++) {
            if (i == proxytia[role].length) return "Senjata invalid";
			if (proxytia[role][i] === weapon)
            return (
                "Selamat datang di Proxytia " +
                role +
                " " +
                name +
                " , gunakan " +
                weapon +
                "mu untuk bermain."
				);
            }
        }
    }
    console.log(proxytiaObject('Ucup', 'ksatria', 'tombak'))
    // Selamat datang di Proxytia ksatria Ucup, gunakan tombakmu untuk bermain.
    
    console.log(proxytiaObject('Icha', 'penyihir', 'pedang'))
    // Senjata invalid.
    
    console.log(proxytiaObject('Armedi', 'Programmer', 'tongkat'))
    // Role invalid
    
    console.log(proxytiaObject('Stef', 'penyihir', 'tongkat'))
    // Selamat datang di Proxytia penyihir Stef, gunakan tongkatmu untuk bermain.