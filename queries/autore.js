class Autore {
    
    constructor(idAutore,nome){
        this.idAutore = idAutore;
        this.NomeCompleto = nome;
    }

    static getAll() {
        let sql = `SELECT * FROM autore ORDER BY NomeCompleto`;
        return sql;           
    }

    static getByKWidVE(id) {
        let sql = `SELECT Autore.* FROM Autore INNER JOIN scrittoda ON autore.idAutore = scrittoda.idAutore WHERE scrittoda.idArticolo IN (SELECT articolo.idArticolo FROM articolo INNER JOIN relativoa ON articolo.idArticolo = relativoa.idArticolo WHERE relativoa.idParolaChiave=`+ id + ') ORDER BY NomeCompleto';
        return sql;           
    } 

    static getByidart(id) {
        let sql = `SELECT Autore.* FROM Autore INNER JOIN scrittoda ON autore.idAutore = scrittoda.idAutore WHERE scrittoda.idArticolo=`+ id;
        return sql;           
    }
    
    static getByid(id) {
        let sql = `SELECT * FROM Autore WHERE idAutore=`+ id;
        return sql;           
    }

    static getcoautori(id) {
        let sql = `SELECT Autore.* FROM bibliog.scrittoda INNER JOIN autore ON scrittoda.idAutore = autore.idAutore WHERE idArticolo IN (
            SELECT idArticolo FROM scrittoda  WHERE idAutore=`+id+`
        ) AND scrittoda.idAutore != `+id+` GROUP BY scrittoda.idAutore`;
        return sql;           
    }

    static getavgcoautbyKWid(id) {
        let sql = `SELECT avg(num_autori) as num_medio from(
            SELECT  count(idAutore) as num_autori FROM bibliog.scrittoda where idArticolo in (
                SELECT idArticolo FROM bibliog.relativoa where idParolaChiave = `+id+`
            ) group by idArticolo) as a;`;
        return sql;           
    }

    static getAllavgcoaut() {
        let sql = `SELECT avg(num_autori) as num_medio from(
            SELECT  count(idAutore) as num_autori FROM bibliog.scrittoda where idArticolo in (
                SELECT idArticolo FROM Articolo
            ) group by idArticolo) as a`;
        return sql;           
    }

    static getAlltop5aut() {
        let sql = `Select autore.idAutore, autore.NomeCompleto, count(idArticolo) as c from Autore inner join scrittoda on autore.idAutore = scrittoda.idAutore where scrittoda.idArticolo in (
            Select articolo.idArticolo from articolo) group by idAutore order by c DESC limit 5`;
        return sql;           
    }

    static gettop5autbyKWid(id) {
        let sql = `Select autore.idAutore, autore.NomeCompleto, count(idArticolo) as c from Autore inner join scrittoda on autore.idAutore = scrittoda.idAutore where scrittoda.idArticolo in (
            Select articolo.idArticolo from articolo inner join relativoa on articolo.idArticolo = relativoa.idArticolo where relativoa.idParolaChiave=`+id+`
        ) group by idAutore order by c DESC limit 5`;
        return sql;           
    }

    static gettop5coaut(id) {
        let sql = `SELECT scrittoda.idAutore, NomeCompleto , count(idArticolo) as c FROM bibliog.scrittoda inner join autore on scrittoda.idAutore = autore.idAutore where idArticolo in (
            SELECT idArticolo FROM scrittoda  where idAutore=`+id+`
        ) and scrittoda.idAutore != `+id+`
          group by scrittoda.idAutore order by c DESC LIMIT 5`;
        return sql;           
    }
}

module.exports = Autore;