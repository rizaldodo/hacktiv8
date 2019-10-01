function invokeSpell(str){
    const spells = [
        { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
        { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
        { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
        { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
        { q: 1, w: 2, e: 0, spellName: 'Tornado' },
        { q: 0, w: 3, e: 0, spellName: 'EMP' },
        { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
        { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
        { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
        { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
    ];
    var q = 0;
    var w = 0;
    var e = 0;

    for(i=0; i<str.length; i++){
        if(str[i] === 'q'){
            q++;
        }else if(str[i] === 'w'){
            w++;
        }else if(str[i] === 'e'){
            e++;
        }
        
    }
    for(i=0; i<spells.length; i++){
        for(orbs in spells){
            // console.log(q ,' === ' ,spells[i].q ,' && ', w ,' === ', spells[i].w ,' && ', e ,' === ', spells[i].e)
            if(q === spells[i].q && w === spells[i].w && e === spells[i].e){
                return spells[i].spellName;
            }
            
        }
        if (i == spells.length - 1){
            
                return "Combination doesn't exist"
            
        }   
    }


}
console.log(invokeSpell('qwe')); // Deafening Blast
console.log(invokeSpell('ewq')); // Deafening Blast
console.log(invokeSpell('qqq')); // Cold Snap
console.log(invokeSpell('wwq')); // Tornado
console.log(invokeSpell('wwe')); // Alacrity
console.log(invokeSpell('wew')); // Alacrity
console.log(invokeSpell('wqa')); // Combination does not exist