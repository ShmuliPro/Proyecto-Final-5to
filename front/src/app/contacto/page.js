import './contacto.css';

export default function contacto() {
    return (
        <>
           <main>
                <section class="hero">
                    <h1>Ponte en contacto</h1>
                   
                </section>

                <section class="contact-container">
                    <div class="contact-info">
                        <p><strong>Phone</strong><br/>
                        Mobile: +(84) 546-6789<br/>
                        Hotline: +(84) 456-6789
                        </p>
                        <p><strong>Horarios</strong><br/>
                        Monday–Friday: 9:00 – 22:00<br/>
                        Saturday–Sunday: 9:00 – 21:00
                        </p>

                        <h1>Ponte en contacto con nosotros y sacate todas tus dudas</h1>
                    </div>
                
                
                    <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">

                        <input type="hidden" name="access_key" value="25ba6dbd-ff8f-4d94-bd04-9196d137e750"/>
                    
                        <label for="name">Your name</label>
                        <input type="text" name="name" required/>
                        <label for="email">Email address</label>
                        <input type="email" name="email" required/>
                        <label for="message">Message</label>
                        <textarea name="message" required></textarea>
                        <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                        <button type="submit">Submit Form</button>
                    
                    </form>
                    </section>
            </main>

        </>
    );}
