<template>
  <div>
    <div class="landing-main-back"></div>
    <div class="landing-main">
      <div class="landing-main-content">
        <h1 class="landing-main-title">{{ $t('landing.title') }}</h1>
        <p class="landing-main-subtitle">{{ $t('landing.sub_title') }}</p>
        <div class="landing-main-actions">
          <a
            href="#"
            class="landing-main-button-go button"
            @click="scrollToDescription()">
            {{ $t('landing.go') }}
          </a>
          <nuxt-link
            to="/shop/retrobox-kit"
            class="landing-main-button-shop button">
            <Icon value="fas fa-shopping-cart"/>
            {{ $t('buy') }}
          </nuxt-link>
        </div>
      </div>
    </div>

    <section
      id="go"
      class="landing-section landing-about landing-section-no-border">
      <div class="landing-about-content">
        <div class="landing-about-text">
          <h2 class="landing-about-title">{{ $t('landing.about.title') }}</h2>
          <p>
            {{ $t('landing.about.description') }}
          </p>
        </div>
        <div class="landing-about-pic">
          <img src="https://static.retrobox.tech/img/about/RETROBOX1.png">
        </div>
      </div>
    </section>

    <section class="landing-divider-background-container">
      <div class="landing-divider-background-image"></div>
      <div class="landing-divider-background-filter"></div>
    </section>

    <section class="landing-section landing-advantages landing-section-no-border">
      <div class="landing-advantages-content">
        <h2 class="landing-advantages-title">
          {{ $t('landing.advantages.title') }}
        </h2>
        <div class="landing-columns">
          <div class="landing-column">
            <div class="landing-column-icon">
              <div class="type-game">
                <Icon value="fas fa-gamepad"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.game.title') }}
                </div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.advantages.game.description') }}
                </p>
              </div>
            </div>
          </div>
          <div class="landing-column">
            <div class="landing-column-icon">
              <div class="type-custom">
                <Icon value="fas fa-screwdriver"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.custom.title') }}</div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.advantages.custom.description') }}
                </p>
              </div>
            </div>
          </div>
          <div class="landing-column">
            <div class="landing-column-icon">
              <div class="type-connected">
                <Icon value="fas fa-tachometer-alt"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.connected.title') }}
                </div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.advantages.connected.description') }}
                </p>
              </div>
            </div>
          </div>
          <div class="landing-column">
            <div class="landing-column-icon">
              <div class="type-switch">
                <Icon value="fas fa-tv"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.switch.title') }}
                </div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.advantages.switch.description') }}
                </p>
              </div>
            </div>
          </div>
          <div class="landing-column">
            <div class="landing-column-icon">
              <div class="type-easy">
                <Icon value="fas fa-gamepad"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.easy.title') }}
                </div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.advantages.easy.description') }}
                </p>
              </div>
            </div>
          </div>
          <div class="landing-column">
            <div class="landing-column-icon">
              <div class="type-opensource">
                <Icon value="fab fa-osi"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.advantages.opensource.title') }}
                </div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.advantages.opensource.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Error
      :title="$t('coming-soon-video.title')"
      :description="$t('coming-soon-video.description')"
      icon="fab fa-youtube"
    />

    <section class="landing-section landing-startnow">
      <div class="landing-startnow-content container mx-auto">
        <h2 class="landing-startnow-title">{{ $t('landing.start_now.title') }}</h2>
        <div class="landing-columns">
          <div class="landing-column type-kited">
            <div class="landing-column-icon">
              <div>
                <Icon value="fas fa-wrench"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.start_now.kited.title') }}</div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.start_now.kited.description') }}
                </p>
              </div>

              <div class="px-6 py-4 landing-column-footer">
                <span
                  class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">EUR 61.99</span>

                <LinkTo
                  class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
                  to="/shop/retrobox-kit">
                  <Icon value="fas fa-shopping-cart"/>
                  {{ $t('buy') }}
                </LinkTo>
              </div>
            </div>
          </div>
          <div class="landing-column type-already">
            <div class="landing-column-icon">
              <div>
                <Icon value="fas fa-box-open"/>
              </div>
            </div>
            <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 title">{{ $t('landing.start_now.non_kited.title') }}
                </div>
                <p class="text-grey-darker text-base">
                  {{ $t('landing.start_now.non_kited.description') }}
                </p>
              </div>
              <div class="px-6 py-4 landing-column-footer">
                <span
                  class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">EUR 70.99</span>

                <LinkTo
                  class="button bg-transparent hover:bg-blue text-blue font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full"
                  to="/shop/retrobox-non-kit">
                  <Icon value="fas fa-shopping-cart"/>
                  {{ $t('buy') }}
                </LinkTo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Icon from "../components/Icon"
  import Error from "../components/Error"
  import LinkTo from "../components/LinkTo"

  export default {
    components: {LinkTo, Error, Icon},
    head() {
      return {
        titleTemplate: '%s',
        title: this.$t('title'),
        meta: [
          {property: 'og:title', content: this.$t('title')}
        ]
      }
    },
    methods: {
      scrollToDescription: function () {
        this.$scrollTo('#go')
      }
    }
  }
</script>
