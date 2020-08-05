<template>
  <div class="product">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="product-card">
      <div class="product-card__images">
        <div class="product-card__images--secondary">
          <img src="/images/clothes/product2.png" alt />
          <img src="/images/clothes/product3.png" alt />
          <img src="/images/clothes/product4.png" alt />
          <img src="/images/clothes/product5.png" alt />
          <img src="/images/clothes/product6.png" alt />
        </div>
        <div class="product-card__images--main">
          <img src="/images/clothes/product1.png" alt />
          <i class="icon icon-favoriteWhiteBig product-card__images--main__favorite"></i>
          <i class="icon icon-arrow product-card__images--main__leftslider"></i>
          <i class="icon icon-arrow product-card__images--main__rightslider"></i>
        </div>
      </div>
      <div class="product-card__info">
        <div class="product-card__info--choice">
          <div class="product-card__info--choice__country">Made in Russia</div>
          <div class="product-card__info--choice__title">Trousers with an elastic band</div>
          <div class="product-card__info--choice__price">$200.00</div>
          <form action class="d-flex flex-column">
            <b-row>
              <b-col>
                <div class="mb-3">Choose color</div>
                <div>
                  <label for class="radio">
                    <input type="radio" name="color" id="gold" value="gold" />
                    <span class="checkmark-color checkmark-color__gold"></span>
                  </label>
                  <label for class="radio">
                    <input type="radio" name="color" id="black" value="black" />
                    <span class="checkmark-color checkmark-color__black"></span>
                  </label>
                  <label for class="radio">
                    <input type="radio" name="color" id="blue" value="blue" />
                    <span class="checkmark-color checkmark-color__blue"></span>
                  </label>
                  <label for class="radio">
                    <input type="radio" name="color" id="purple" value="purple" />
                    <span class="checkmark-color checkmark-color__purple"></span>
                  </label>
                </div>
              </b-col>
              <b-col>
                <div class="mb-3">Choose size</div>
                <div>
                  <input type="radio" name="size" id="XS" value="xs" />
                  <input type="radio" name="size" id="S" value="s" />
                  <input type="radio" name="size" id="M" value="m" />
                  <input type="radio" name="size" id="L" value="l" />
                </div>
              </b-col>
            </b-row>
            <button type="submit" class="product-card__info--choice__button">Add to bag</button>
          </form>
          <div class="d-flex flex-row justify-content-between">
            <div class="product-card__info--choice__guide">Size guide</div>
            <div class="font-weight-bold">Deliver on June 15th or later.</div>
          </div>
        </div>
        <div class="product-card__info--description">
          Trousers with an elastic band. Imitation back pocket, lapels at
          the bottom of the pants. Made of light suit fabric, without
          lining.
        </div>
        <b-row class="product-card__info--fabric">
          <b-col class="text-center">
            <div>27%</div>
            <div>Polyester</div>
          </b-col>
          <b-col class="text-center">
            <div>25%</div>
            <div>Woll</div>
          </b-col>
          <b-col class="text-center">
            <div>19%</div>
            <div>Acrylic</div>
          </b-col>
          <b-col class="text-center">
            <div>16%</div>
            <div>Silk</div>
          </b-col>
          <b-col class="text-center">
            <div>12%</div>
            <div>Viscose</div>
          </b-col>
          <b-col class="text-center">
            <div>1%</div>
            <div>Elastane</div>
          </b-col>
        </b-row>
        <div class="product-card__info--similar">
          <div class="product-card__info--similar__title">Similar to this item</div>
          <div class="d-flex flex-row">
            <div class="product-card__info--similar__item">
              <img
                src="/images/clothes/similar1.png"
                alt
                class="product-card__info--similar__item--image"
              />
              <div class="font-weight-bold">$95.00</div>
              <div class="product-card__info--similar__item--description">Loose jeans lorem</div>
              <i class="icon icon-favoriteWhite product-card__info--similar__item--favorite"></i>
            </div>
            <div class="product-card__info--similar__item">
              <img
                src="/images/clothes/similar2.png"
                alt
                class="product-card__info--similar__item--image"
              />
              <div class="font-weight-bold">$32.00</div>
              <div class="product-card__info--similar__item--description">Trousers lorem ipsum</div>
              <i class="icon icon-favoriteWhite product-card__info--similar__item--favorite"></i>
            </div>
            <div class="product-card__info--similar__item">
              <img
                src="/images/clothes/similar3.png"
                alt
                class="product-card__info--similar__item--image"
              />
              <div class="font-weight-bold">$123.00</div>
              <div class="product-card__info--similar__item--description">Wide-leg trousers</div>
              <i class="icon icon-favoriteWhite product-card__info--similar__item--favorite"></i>
            </div>
            <div class="product-card__info--similar__item">
              <img
                src="/images/clothes/similar4.png"
                alt
                class="product-card__info--similar__item--image"
              />
              <div class="font-weight-bold">$80.00</div>
              <div class="product-card__info--similar__item--description">Knitwear trousers</div>
              <i class="icon icon-favoriteWhite product-card__info--similar__item--favorite"></i>
            </div>
            <i class="icon icon-arrowRound product-card__info--similar__leftslider"></i>
            <i class="icon icon-arrowRound product-card__info--similar__rightslider"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="product-suggestion">
      <div class="product-suggestion__title">Other things</div>
      <div>
        <div class="product-suggestion__card">
          <div class="product-suggestion__card--item">
            <img src="/images/clothes/other1.png" alt />
            <div class="font-weight-bold">$177.00</div>
            <div>Jumpsuit</div>
            <i class="icon icon-favoriteWhite product-suggestion__card--item__favorite"></i>
          </div>
          <div class="product-suggestion__card--item">
            <img src="/images/clothes/other2.png" alt />
            <div class="font-weight-bold">$108.00</div>
            <div>Trousers with pleats</div>
            <i class="icon icon-favoriteWhite product-suggestion__card--item__favorite"></i>
          </div>
          <div class="product-suggestion__card--item">
            <img src="/images/clothes/other3.png" alt />
            <div class="font-weight-bold">$68.00</div>
            <div>Denim shorts with a belt</div>
            <i class="icon icon-favoriteWhite product-suggestion__card--item__favorite"></i>
          </div>
          <div class="product-suggestion__card--item">
            <img src="/images/clothes/other4.png" alt />
            <div class="font-weight-bold">$89.00</div>
            <div>Wide straight trousers</div>
            <i class="icon icon-favoriteWhite product-suggestion__card--item__favorite"></i>
          </div>
          <div class="product-suggestion__card--item">
            <img src="/images/clothes/other5.png" alt />
            <div class="font-weight-bold">$106.00</div>
            <div>Openwork vest</div>
            <i class="icon icon-favoriteWhite product-suggestion__card--item__favorite"></i>
          </div>
          <i class="icon icon-arrowRound product-suggestion__card--leftslider"></i>
          <i class="icon icon-arrowRound product-suggestion__card--rightslider"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "#",
        },
        {
          text: "Trousers",
          href: "#",
        },
        {
          text: "Trousers with an elastic band",
          active: true,
        },
      ],
    };
  },
};
</script>