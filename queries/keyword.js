class Keyword {
    
    constructor(idParolaChiave,termine){
        this.idParolaChiave = idParolaChiave;
        this.Termine=termine;
    }

    static getAll() {
        let sql = `SELECT * FROM parolachiave  ORDER BY Termine`;
        return sql;           
    }
    
    static getKWsByIdart(id) {
        let sql = `SELECT Termine FROM bibliog.parolachiave INNER JOIN relativoa ON parolachiave.idParolaChiave=relativoa.idParolaChiave WHERE relativoa.idArticolo=`+id;
        return sql;           
    }

    static gettop5kwbyKWid(id) {
        let sql = `select parolachiave.Termine,count(idArticolo) as num_art from relativoa INNER JOIN parolachiave ON 
        parolachiave.idParolaChiave=relativoa.idParolaChiave where idArticolo in (
        SELECT idArticolo FROM bibliog.relativoa where idParolaChiave = `+id+`
    ) group by relativoa.idParolaChiave order by num_art DESC LIMIT 5
    `;
        return sql;           
    }

    static getAlltop5() {
        let sql = `select parolachiave.Termine,count(idArticolo) as num_art from relativoa INNER JOIN parolachiave ON 
        parolachiave.idParolaChiave=relativoa.idParolaChiave where idArticolo in (
        SELECT idArticolo FROM Articolo
    ) group by relativoa.idParolaChiave order by num_art DESC LIMIT 5`;
        return sql;           
    }
}

module.exports = Keyword;