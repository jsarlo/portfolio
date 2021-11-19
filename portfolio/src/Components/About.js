import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';
import Contact from './Contact';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const StyledMainContainer = styled.div`
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) { 
  #fourth-container {
    height: 250vh;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  #fourth-container {
    height: 270vh;
  }
}
@media only screen and (max-width: 400px) {
  #fourth-container { 
    height: 300vh;
  }
}
@media only screen and (min-width: 992px) {
  #fourth-container {
    height: 100vh;
  }
}

@media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
  #fourth-container {
    height: 175vh;
  } /* your css rules for ipad portrait */
}
@media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
  #fourth-container {
    height: 100vh;
  } /* your css rules for ipad landscape */
}

`
const StyledFirstContainer = styled.div`
  height: 50vh;
  #first-content {
    text-align: center;
    padding: 24vh 0;
  }
`

const StyledSecondContainer = styled.div`
  height: 50vh;
`

const StyledFourthContainer = styled.div`
  height: 100vh;
`

const StyledFifthContainer = styled.div`
  height: 50vh;
`


const About = () => {

  return (
    <StyledMainContainer>
      <Controller>
        <Scene duration={200} triggerElement="#first-container" offset={500}>
          {(progress) => (
            <Tween
              from={{
                css: {
                  opacity: '1',
                },
                ease: 'Circ.easeOutExpo',
              }}
              to={{
                css: {
                  opacity: '0.1',
                },
                ease: 'Circ.easeOutExpo',
              }}
              totalProgress={progress}
              paused
            >
              <StyledFirstContainer id="first-container">
                <div id='first-content'>
                  <h1 >Hi, my name is James!</h1>
                  <p>Just a heads up, I recommend scrolling slowly :)</p>
                </div>
              </StyledFirstContainer>
            </Tween>
          )}
        </Scene>
      </Controller>
      <div id='second-container' style={{ height: '50vh' }}>
        <Controller>
          <Scene duration={200} triggerElement="#first-container" offset={500}>
            {(progress) => (
              <Tween
                from={{
                  css: {
                    opacity: '0',
                  },
                  ease: 'Circ.easeOutExpo',
                }}
                to={{
                  css: {
                    opacity: '1',
                  },
                  ease: 'Circ.easeOutExpo',
                }}
                totalProgress={progress}
                paused
              >
                <StyledSecondContainer id="second-container">
                  <h1>I'm a full-stack developer from Pittsburgh, PA!</h1>
                  <p>Every day I'm actively seeking the challenge that comes with software development.</p>
                </StyledSecondContainer>
              </Tween>
            )}
          </Scene>
        </Controller>
      </div>
      <div id='third-container' style={{ height: '50vh' }}>
        <Controller>
          <Scene duration={200} triggerElement="#second-container" offset={400}>
            {(progress) => (
              <Tween
                from={{
                  css: {
                    opacity: '0',
                  },
                  ease: 'Circ.easeOutExpo',
                }}
                to={{
                  css: {
                    opacity: '1',
                  },
                  ease: 'Circ.easeOutExpo',
                }}
                totalProgress={progress}
                paused
              >
                <StyledSecondContainer id="third-container">
                  <h1>I'm a naturally curious person who has always had a mind for building things</h1>
                  <p>That probably comes from my father, who owns a construction company!</p>
                </StyledSecondContainer>
              </Tween>
            )}
          </Scene>
        </Controller>
      </div>
      <div id='fourth-container'>
        <Controller>
          <Scene duration={200} triggerElement="#third-container" offset={500}>
            {(progress) => (
              <Tween
                from={{
                  css: {
                    opacity: '0',
                  },
                  ease: 'Circ.easeOutExpo',
                }}
                to={{
                  css: {
                    opacity: '1',
                  },
                  ease: 'Circ.easeOutExpo',
                }}
                totalProgress={progress}
                paused
              >
                <StyledFourthContainer id="fourth-container">
                  <Skills />

                </StyledFourthContainer>
              </Tween>
            )}
          </Scene>
        </Controller>
      </div>
      <div id="fifth-container">
        <Controller>
          <Scene duration={200} triggerElement="#fourth-container" offset={500}>
            {(progress) => (
              <Tween
                from={{
                  css: {
                    opacity: '0',
                  },
                  ease: 'Circ.easeOutExpo',
                }}
                to={{
                  css: {
                    opacity: '1',
                  },
                  ease: 'Circ.easeOutExpo',
                }}
                totalProgress={progress}
                paused
              >
                <StyledFifthContainer id="fifth-container">
                  <Contact />
                </StyledFifthContainer>
              </Tween>
            )}
          </Scene>
        </Controller>
      </div>
    </StyledMainContainer>
  )
};

export default About;
