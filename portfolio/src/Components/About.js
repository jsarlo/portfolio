import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';
import Contact from './Contact';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const StyledMainContainer = styled.div`
background-color: #21D4FD;
background-image: linear-gradient(38deg, #21D4FD 0%, #B721FF 100%);
@media only screen and (max-height: 568px) {
  #fourth-container {
    height: 350vh;
  }
}
@media only screen and (min-height: 667px) {
  #fourth-container {
    height: 290vh;
  }
}
@media only screen and (min-height: 736px) {
  #fourth-container {
    height: 250vh;
  }
}
@media only screen and (min-height: 812px) {
  #fourth-container {
    height: 225vh;
  }
}
@media only screen and (min-height: 823px) {
  #fourth-container {
    height: 275vh;
  }
}
  @media only screen and (min-height: 1024px) {
    #fourth-container {
      height: 175vh;
    }
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
