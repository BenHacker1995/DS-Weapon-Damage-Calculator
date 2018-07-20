class CalcModule {

    constructor( details, char ) {
        this.details = details;
        this.char = char;
    }

    StrDexRating = ( stat ) => {
        if( stat >= 10 && stat < 20 ) {
            let inclvl = .035;
            let lvl = stat - 10;
            let inc = inclvl * lvl;
            return .05 + inc;
        }
        else if( stat >= 20 && stat < 40 ) {
            let inclvl = .0225;
            let lvl = stat - 20;
            let inc = inclvl * lvl;
            return .40 + inc;
        }
        else if( stat >= 40 ) {
            let inclvl = .0025;
            let lvl = stat - 40;
            let inc = inclvl * lvl;
            return .85 + inc;
        }
        else {
            return null;
        }
    }

    IntFaithRating = ( stat ) => {
        if( stat >= 10 && stat < 30 ) {
            let inclvl = .0225;
            let lvl = stat - 10;
            let inc = inclvl * lvl;
            return .05 + inc;
        }
        else if( stat >= 30 && stat < 50 ) {
            let inclvl = .015;
            let lvl = stat - 30;
            let inc = inclvl * lvl;
            return .50 + inc;
        }
        else if( stat >= 50 ) {
            let inclvl = .20/49.0;
            let lvl = stat - 50;
            let inc = inclvl * lvl;
            return .80 + inc;
        }
        else {
            return null;
        }
    }

    damages = () => {
        this.basePhys = this.details.physdmg;
        this.baseMagic = this.details.magicdmg;
        this.baseFire = this.details.firedmg;
        this.baseLightning = this.details.ltngdmg;
    
        this.StrScale = this.details.strscale / 100;
        this.DexScale = this.details.dexscale / 100;
        this.IntScale = this.details.intscale / 100;
        this.FaithScale = this.details.faithscale / 100;
    
        this.StrRating = this.StrDexRating( this.char.strength );
        this.DexRating = this.StrDexRating( this.char.dexterity );
    
        this.IntRating = this.IntFaithRating( this.char.intelligence );
        this.FaithRating = this.IntFaithRating( this.char.faith );
    
        this.bonusStr = this.basePhys * this.StrScale * this.StrRating;
        this.bonusDex = this.basePhys * this.DexScale * this.DexRating;
    
        this.bonusInt = this.baseMagic * this.IntScale * this.IntRating;
        this.bonusFaith = this.baseMagic * this.FaithScale * this.FaithRating;
    
        this.phys = this.basePhys + this.bonusStr + this.bonusDex;
        this.magic = this.baseMagic + this.bonusInt + this.bonusFaith;
        this.fire = this.baseFire;
        this.lightning = this.baseLightning;
        this.total = this.phys + this.magic + this.fire + this.lightning;
        
        return {
            wepname: this.details.wepname,
            
                physdmg: this.phys,
                magicdmg: this.magic,
                firedmg: this.fire,
                ltngdmg: this.lightning,
                totaldmg: this.total,

                strength: this.StrRating,
                dexteriy: this.DexRating,
                intelligence: this.IntRating,
                faith: this.FaithRating,

                strscale: this.StrScale,
                dexscale: this.DexScale,
                intscale: this.IntScale,
                faithscale: this.FaithScale,

                strreq: this.details.strreq,
                dexreq: this.details.dexreq,
                intreq: this.details.intreq,
                faithreq: this.details.faithreq
            
        }
    }
}


export default ( CalcModule );