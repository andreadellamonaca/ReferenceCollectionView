class Articolo {
    
    constructor(idAutore,nome){
        this.idAutore = idAutore;
        this.NomeCompleto = nome;
    }

    static getByKWidVE(id) {
        let sql = `SELECT articolo.idArticolo, articolo.Titolo, AnnoPubblicazione, conferenza.Nome, conferenza.Data, giornale.Titolo AS g_titolo FROM articolo INNER JOIN conferenza ON idConferenzaPresentazione=idConferenza INNER JOIN giornale ON articolo.idGiornale=giornale.idGiornale INNER JOIN relativoa ON articolo.idArticolo=relativoa.idArticolo WHERE relativoa.idParolaChiave = `+ id +` ORDER BY articolo.AnnoPubblicazione DESC`;
        return sql;           
    } 

    static getAllVE() {
        let sql = `SELECT idArticolo, articolo.Titolo, AnnoPubblicazione, conferenza.Nome, conferenza.Data, giornale.Titolo AS g_titolo FROM bibliog.articolo INNER JOIN conferenza ON idConferenzaPresentazione=idConferenza INNER JOIN giornale ON articolo.idGiornale=giornale.idGiornale ORDER BY articolo.AnnoPubblicazione DESC`;
        return sql;           
    }

    static getByid(id) {
        let sql = `SELECT articolo.idArticolo, articolo.Titolo, articolo.DOI, articolo.ISSN, articolo.ISBN, articolo.Abstract, AnnoPubblicazione, conferenza.Nome, conferenza.Data, conferenza.Luogo, giornale.Titolo AS g_titolo FROM articolo INNER JOIN conferenza ON idConferenzaPresentazione=idConferenza INNER JOIN giornale ON articolo.idGiornale=giornale.idGiornale WHERE articolo.idArticolo=`+ id;
        return sql;           
    } 

    static getlinks(id) {
        let sql = `SELECT repository.Nome, presentein.URL_Articolo FROM presentein INNER JOIN articolo ON presentein.idArticolo=articolo.idArticolo INNER JOIN repository ON repository.idRepository=presentein.idRepository WHERE presentein.idArticolo=`+ id;
        return sql;           
    }

    static getreferences(id) {
        let sql = `SELECT articolo.idArticolo, articolo.Titolo, articolo.AnnoPubblicazione FROM citatoda INNER JOIN articolo ON citatoda.idArticoloCitato=articolo.idArticolo WHERE idArticolocheCita=`+ id;
        return sql;           
    }

    static getByidaut(id) {
        let sql = `SELECT Articolo.idArticolo, Articolo.Titolo, Articolo.AnnoPubblicazione FROM Articolo INNER JOIN scrittoda ON scrittoda.idArticolo=articolo.idArticolo WHERE scrittoda.idAutore=`+ id;
        return sql;           
    }

    static getArtAnnobyidKW(id) {
        let sql = `SELECT AnnoPubblicazione, count(idArticolo) AS num_art FROM bibliog.articolo WHERE idArticolo  IN(
            SELECT idArticolo FROM bibliog.relativoa WHERE idParolaChiave = `+id+`
            )
        GROUP BY AnnoPubblicazione ORDER BY AnnoPubblicazione`;
        return sql;           
    }
    static getAllArtAnno() {
        let sql = `SELECT AnnoPubblicazione, count(idArticolo) AS num_art FROM bibliog.articolo
        GROUP BY AnnoPubblicazione ORDER BY AnnoPubblicazione`;
        return sql;           
    }
    
    static getArtRepobyidKW(id) {
        let sql = `SELECT repository.Nome, count(relativoa.idArticolo) as num_art FROM repository 
        LEFT JOIN presentein ON presentein.idRepository = repository.idRepository
          LEFT JOIN relativoa ON relativoa.idArticolo = presentein.idArticolo and relativoa.idParolaChiave = `+id+`
          GROUP BY repository.idRepository`;
        return sql;           
    }

    static getAllArtRepo() {
        let sql = `SELECT repository.Nome, count(idArticolo) as num_art FROM repository LEFT JOIN presentein ON presentein.idRepository = repository.idRepository GROUP BY repository.idRepository`;
        return sql;           
    }

    static getavgrefsbyKWid(id) {
        let sql = `SELECT avg(a.num_riferimenti) as num_cit_medio from (
	SELECT count(idArticoloCitato) as num_riferimenti FROM bibliog.citatoda where idArticolocheCita in (
		SELECT idArticolo FROM bibliog.relativoa where idparolachiave=`+id+`
	) group by idArticolochecita ) as a`;
        return sql;           
    }

    static getAllavgrefs() {
        let sql = `SELECT avg(a.num_riferimenti) as num_cit_medio from (
	SELECT count(idArticoloCitato) as num_riferimenti FROM bibliog.citatoda where idArticolocheCita in (
		SELECT idArticolo FROM Articolo
	) group by idArticolochecita ) as a`;
        return sql;           
    }

    static getCountArtByidaut(id) {
        let sql = `SELECT COUNT(Articolo.idArticolo) as num_art, Articolo.AnnoPubblicazione FROM Articolo INNER JOIN scrittoda ON scrittoda.idArticolo=articolo.idArticolo WHERE scrittoda.idAutore=`+id+` GROUP BY AnnoPubblicazione ORDER BY AnnoPubblicazione`;
        return sql;           
    }
}

module.exports = Articolo;