import "./index.scss";

export default function Light() {
  return (
    <div className="light">
      <header>
        <div className="cabecalho">
          <img src="assets\images\light\light.svg" alt="logoLight" />

          <div className="links">
            <h1>
              <a href="#servicos">Serviços</a>
            </h1>
            <h1>
              <a href="#capabilidades">Capabilidades</a>
            </h1>
            <h1>
              <a href="#sobre">Sobre nós</a>
            </h1>
            <h1>
              <a href="#contato">Contato</a>
            </h1>
          </div>
        </div>
      </header>

      <section>
        <div className="banner">
          <div className="nome">
            <img src="assets\images\light\LightDigital.png" alt="" />
          </div>
          <img src="assets\images\light\Make.png" alt="" />
        </div>
      </section>

      <section className="servicos" id="servicos">
        <div className="servicos_a1">
          <h1>Serviços</h1>
        
          
          <div className="images">
            <div><h1 className="saas"> Web e App Design</h1><img className="sla" src="assets/images/light/codigo.png" alt="" /></div>
            <div><h1 className="saas">Inteligencia <br />Artificial</h1><img src="assets/images/light/floating.png" alt="" /></div>
            <div><h1 className="saas">Redes e Internet</h1><img src="assets/images/light/inter.png" alt="" /></div>
            <div><h1 className="saas">Software de BPM</h1><img src="assets/images/light/Getty.png" alt="" /></div>
          </div>
        </div>

        <div>
         
          <h1 id="capabilidades">Capabilidades</h1>
          <div className="images">
          <div><h1 className="saas">E-commerce</h1><img src="assets/images/light/eshop.png" alt="" /></div>
          <div><h1 className="saas">Equipamento <br /> Hospitalar</h1> <img src="assets/images/light/engenharia.png" alt="" /></div>
          <div><h1 className="saas">Sistemas <br />de <br /> Produção</h1><img src="assets/images/light/eletrotecnica.png" alt="" /></div>
          <div><h1 className="saas">Sistema bancário</h1><img src="assets/images/light/bank.png" alt="" /></div>

          
          
          </div>
        </div>
      </section>

      <section>
        <div className="sobre" id="sobre">
          <h1>Sobre nós</h1>

          <p>
            Bem-vindo à Light Digital! Somos uma empresa dedicada a iluminar o
            caminho digital das empresas e pessoas, trazendo soluções inovadoras
            e eficientes para suas necessidades tecnológicas. Nosso foco é criar
            sites modernos, funcionais e personalizados que refletem a essência
            do seu negócio, além de oferecer serviços de instalação de redes que
            garantem conectividade rápida e segura. <br /> <br />
            Na Light Digital, acreditamos que a tecnologia deve ser acessível,
            prática e capaz de transformar a forma como você interage com o
            mundo. Nossa equipe é composta por profissionais experientes e
            apaixonados pelo que fazem, sempre prontos para ouvir suas
            necessidades e transformar suas ideias em realidade. <br /> <br />{" "}
            Estamos comprometidos em entregar resultados de alta qualidade, com
            um atendimento próximo e personalizado. Seja desenvolvendo o site
            dos seus sonhos ou instalando uma rede robusta para o seu
            escritório, estamos aqui para tornar o processo simples e eficaz.{" "}
            <br /> <br /> Conte conosco para ser o parceiro que você pode
            confiar na sua jornada digital. Na Light Digital, fazemos a
            tecnologia brilhar ao seu favor!
          </p>
        </div>
      </section>

      <div className="sobre">
        <a
          href="https://wa.me/5511940330018?text=Ol%C3%A1!%20Voc%C3%AA%20entrou%20em%20contato%20com%20a%20Light%20Digital,%20empresa%20de%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas.%20Em%20que%20podemos%20ajudar%20hoje?%20"
          className="contato"
        >
          <h2>Solicite um Orçamento</h2>
          <img src="assets/images/light/setaRight.png" alt="seta" width="" />
        </a>

        <h1 className="con" id="contato">
          Contato
        </h1>
        <p>
          Estamos prontos para ajudar você a dar o próximo passo na sua jornada
          digital! Entre em contato com a Light Digital pelos canais abaixo:
          <li> Telefone/WhatsApp: (11) 94033-0018 </li>
          <li> E-mail: tech@lightdigital.com.br </li>
          <li>Horário de Atendimento: Segunda a Sexta, das 9h às 18h </li>
          Siga-nos nas redes sociais para ficar por dentro das novidades e dicas
          sobre tecnologia. Vamos juntos fazer a tecnologia brilhar ao seu
          favor!
        </p>
      </div>

      <footer>
        <div className="rodape">
          <div className="atendimento">
            <div className="contatos">
              <img className="what" src="assets/images/light/whatsapp.png" alt="logo" />
              <p>(11) 94033-0018</p>
            </div>

            <div className="contatos">
              <img className="what" src="assets/images/light/email.png" alt="logo"  />
              <p>tech@lightdigital.com.br</p>
            </div>
          </div>
          <div className="images">
            <img
              className="lampada"
              src="assets/images/light/light.svg"
              alt=""
            />
            <img
              className="light"
              src="assets\images\light\LightDigital.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
