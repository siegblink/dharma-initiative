import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade'

const contactData = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Address',
    text: '5025 Roosevelt Rd, Moundridge, KS, 67107',
  },
  {
    icon: 'fas fa-phone-alt',
    title: `Let's Talk`,
    text: '620-253-0311',
  },
  {
    icon: 'fas fa-envelope',
    title: `General Support`,
    text: 'contact@dharmasupport.com',
  },
]

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <Fragment>
      <Fade>
        <section className='contact-container' aria-label='contact us'>
          <div className='sub-container'>
            <div className='contact-info'>
              <ul>
                {contactData.map(function (item) {
                  return (
                    <li key={item.title}>
                      <div>
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className='contact-form'>
              <h1>Send us a message</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Tell us your name</label>
                  <div className='name'>
                    <input type='text' placeholder='First name' />
                    <input type='text' placeholder='Last name' />
                  </div>
                </div>

                <div>
                  <label>Enter your email</label>
                  <div>
                    <input type='text' placeholder='example@email.com' />
                  </div>
                </div>

                <div>
                  <label>Enter phone number</label>
                  <div>
                    <input type='text' placeholder='1 800 000000' />
                  </div>
                </div>

                <div>
                  <label>Enter phone number</label>
                  <div>
                    <textarea
                      rows='5'
                      placeholder='Write us a message'></textarea>
                  </div>
                </div>

                <div>
                  <button>Send message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Fade>
    </Fragment>
  )
}
