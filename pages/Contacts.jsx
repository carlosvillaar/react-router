const Contacts = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container my-5">
        <h1 className="my-5 text-center">Contatti</h1>
        <p>
          Hai domande, suggerimenti o vuoi condividere con noi le tue creazioni
          in cucina? Siamo sempre felici di ascoltarti! Puoi scriverci per
          ricevere supporto, proporre nuove idee o semplicemente per raccontarci
          la tua esperienza con le nostre ricette.
        </p>
        <p className="fst-italic">📧 Email:[mailinventata@email.com] </p>
        <p className="fst-italic">📱 Telefono: [123-456-7890]</p>
        <p className="fst-italic">
          {" "}
          📍 Indirizzo: [Via inesistente, Molise, 86020 ]
        </p>
        <p>
          Oppure, compila il modulo qui sotto e ti risponderemo il prima
          possibile. Siamo qui per aiutarti e per rendere la tua esperienza in
          cucina ancora più speciale. Non vediamo l’ora di sentirti!
        </p>
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Rompici le Scatole</h2>
        <form className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Inserisci il tuo nome falso"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Inserisci la tua email falsa"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Messaggio
            </label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Scrivi il tuo falso messaggio"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handleSendMessage}
          >
            Invia Messaggio e Disturbaci
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
