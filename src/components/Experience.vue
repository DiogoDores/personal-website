<template>
  <div class="section" id="experience">
    <h1 class="section-title">Experience</h1>

    <div class="section-container">
      <div class="section-name"><span>Work</span></div>
      <div class="section-content">
          <div class="exp-title">Tutor</div>

          <div class="exp-desc"> 
            Worked a total of 2 months (45 weekly hours, 5 days a week) as a tutor for the University of Porto, 
            in a program called "Universidade Júnior".
            Taught students from the 8th grade how to program in Python with a Raspberry Pi.
          </div>

          <div class="exp-others"> 
            <span class="exp-calendar">
              <font-awesome-icon class="icon" icon="calendar-alt" />
              <p>2018-2019</p>
            </span>
            <span class="exp-location">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
              <p>Faculdade de Engenharia da Universidade do Porto (FEUP)</p>
            </span>
          </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section-name"><span>Activities</span></div>
      <div class="section-content">
          <div class="exp-title">IEEE UP SB's Head of Communications and Branding Department</div>

          <div class="exp-desc"> 
            This role required me to be responsible for the branding, as well as managing social
             media accounts and creating an overall distinct image for the IEEE University of Porto Student Branch.
          </div>

          <div class="exp-others"> 
            <span class="exp-calendar">
              <font-awesome-icon class="icon" icon="calendar-alt" />
              <p>2020-present</p>
            </span>
            <span class="exp-location">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
              <p>IEEE University of Porto Student Branch</p>
            </span>
          </div>
      </div>
      <div class="section-content">
          <div class="exp-title">IEEE UP SB's Computer Society Vice-President</div>

          <div class="exp-desc"> 
            This role required me to actively participate in the organization of technical workshops and talks,
             which are tutored by chapter members or experienced invited speakers, and even competitions,
             which attracted many participants and highlighted the importance of the chapter within the academic community.
          </div>

          <div class="exp-others"> 
            <span class="exp-calendar">
              <font-awesome-icon class="icon" icon="calendar-alt" />
              <p>2019-2020</p>
            </span>
            <span class="exp-location">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
              <p>IEEE University of Porto Student Branch</p>
            </span>
          </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section-name"><span>Volunteering</span></div>
      <div class="section-content">
          <div class="exp-title">Tutor</div>

          <div class="exp-desc"> 
            Worked a total of 19 hours as a volunteer tutor in Ramalde, Porto. Assisted students from the 4th to the 6th grade.
          </div>

          <div class="exp-others"> 
            <span class="exp-calendar">
              <font-awesome-icon class="icon" icon="calendar-alt" />
              <p>2012-2015</p>
            </span>
            <span class="exp-location">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
              <p>Ramalde, Porto, Portugal</p>
            </span>
          </div>
      </div>
      <div class="section-content">
          <div class="exp-title">Meal Server</div>

          <div class="exp-desc"> 
            Worked a total of 35 hours as a volunteer meal server for the homeless in Porto, Portugal.
          </div>

          <div class="exp-others"> 
            <span class="exp-calendar">
              <font-awesome-icon class="icon" icon="calendar-alt" />
              <p>2012-2015</p>
            </span>
            <span class="exp-location">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
              <p>Porto, Portugal</p>
            </span>
          </div>
      </div>
    </div>

    <div class="section-container">
      <div class="section-name"><span>Education</span></div>
      <div class="section-content">
          <div class="exp-title">Master in Informatics and Computing</div>

          <div class="exp-desc"> 
              A course divided into two cycles, where, in the first one, 
              I aquired a solid base instruction comprising not only of the essential scientific and engineering skills, 
              but also a wideband fundamental knowledge in several domains of informatics. The last cycle consists of a specilization in
              a few, individually configurable, areas, where I chose to broaden my knowledge in, mainly, the Software Engineering and Multimedia domains.
          </div>

          <div class="exp-others"> 
            <span class="exp-calendar">
              <font-awesome-icon class="icon" icon="calendar-alt" />
              <p>2015-present</p>
            </span>
            <span class="exp-location">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
              <p>Faculdade de Engenharia da Universidade do Porto (FEUP)</p>
            </span>
          </div>
      </div>
      <div class="section-content">
          <div class="exp-title">10th to 12th year of compulsory education</div>

          <div class="exp-desc"> 
            Taken compulsory education at Colégio de Nossa Senhora do Rosário at Porto, Portugal.
            Finished with a final grade of 18.20 out of 20.00.
          </div>

          <div class="exp-others"> 
            <span class="exp-calendar">
              <font-awesome-icon class="icon" icon="calendar-alt" />
              <p>2012-2015</p>
            </span>
            <span class="exp-location">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
              <p>Colégio de Nossa Senhora do Rosário</p>
            </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
}
</script>

<style scoped lang="scss">
  #experience{

      .section-name {

        padding: 0.2em 0;
      
        span{
          padding: 0.3em 2.5em;
          background-color: $color-dark;
          border-radius: 0.5em 0.5em 0 0;

          font-family: $font-text;
          font-size: 1.5em;
          text-transform: lowercase;
          color: $color-text-light;
        }
          
      }

      .section-container{

        &:not(:last-child){
          margin-bottom: 5em;
        }

        .section-content{
            padding: 2em;
            
            &:nth-child(2){
              border-top-right-radius: 30px;
            }

            &:not(:last-child){
              box-shadow:  5px 12px 15px $color-shadow;
            }

            &:last-child{
              box-shadow:  5px 12px 15px $color-shadow,
                        20px 20px 15px $color-text-light;
            }

            &:nth-child(even){
              background-color: $color-secondary;
            }

            &:nth-child(odd){
              background-color: white;
            }

            .exp-title{
              font-size: 1.2em;
              font-weight: 500;
              margin-bottom: 0.7em;
            }

            .exp-desc{
              font-family: $font-text;
              margin-bottom: 1em;

            }

            .exp-others{
              display: block;

              span{
                display: flex;
                align-items: center;

                .icon{
                  color: $color-dark;
                  margin-right: 0.5em;
                }

                p{
                  font-family: $font-text;
                  margin-bottom: 0;
                }
              }
            }
        }
      }
  }
</style>
