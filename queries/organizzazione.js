class Organizzazione {
    
    constructor(idOrganizzazione, nome, sede){
        this.idOrganizzazione = idOrganizzazione;
        this.Nome=nome;
        this.Sede=sede;
    }

    static getByidaut(id) {
        let sql = `SELECT organizzazione.* FROM organizzazione INNER JOIN affiliatoa ON organizzazione.idOrganizzazione=affiliatoa.idOrganizzazione WHERE affiliatoa.idAutore=`+id;
        return sql;           
    }

    static getAlltop5org() {
        let sql = `SELECT organizzazione.idOrganizzazione, organizzazione.Nome, organizzazione.sede, count(idAutore) as c FROM bibliog.affiliatoa inner join organizzazione on affiliatoa.idOrganizzazione = organizzazione.idOrganizzazione where idAutore in (
            Select Autore.idAutore from Autore inner join scrittoda on autore.idAutore = scrittoda.idAutore where scrittoda.idArticolo in (
                Select articolo.idArticolo from articolo) Group by Autore.idAutore ) group by organizzazione.idOrganizzazione order by c DESC LIMIT 5`;
        return sql;           
    }

    static gettop5orgbyKWid(id) {
        let sql = `SELECT organizzazione.idOrganizzazione, organizzazione.Nome, organizzazione.sede, count(idAutore) as c FROM bibliog.affiliatoa inner join organizzazione on affiliatoa.idOrganizzazione = organizzazione.idOrganizzazione where idAutore in (
            Select Autore.idAutore from Autore inner join scrittoda on autore.idAutore = scrittoda.idAutore where scrittoda.idArticolo in (
                Select articolo.idArticolo from articolo inner join relativoa on articolo.idArticolo = relativoa.idArticolo where relativoa.idParolaChiave=`+id+`
            ) Group by Autore.idAutore 
        ) group by organizzazione.idOrganizzazione order by c DESC LIMIT 5`;
        return sql;           
    }
}

module.exports = Organizzazione;