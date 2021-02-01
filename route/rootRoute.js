const express = require('express')
const app = express.Router()

const faker = require('faker')

// Faker News Title
const title1 = faker.lorem.sentence()
const title2 = faker.lorem.sentence()
const title3 = faker.lorem.sentence()
const title4 = faker.lorem.sentence()
const title5 = faker.lorem.sentence()
const title6 = faker.lorem.sentence()

// Faker News Preview
const newsPreview1 = faker.lorem.paragraph()
const newsPreview2 = faker.lorem.paragraph()
const newsPreview3 = faker.lorem.paragraph()
const newsPreview4 = faker.lorem.paragraph()
const newsPreview5 = faker.lorem.paragraph()
const newsPreview6 = faker.lorem.paragraph()

// Faker News Paragraph 2
const newsParagraph21 = faker.lorem.paragraph()
const newsParagraph22 = faker.lorem.paragraph()
const newsParagraph23 = faker.lorem.paragraph()
const newsParagraph24 = faker.lorem.paragraph()
const newsParagraph25 = faker.lorem.paragraph()
const newsParagraph26 = faker.lorem.paragraph()

// Faker News Paragraph 3
const newsParagraph31 = faker.lorem.paragraph()
const newsParagraph32 = faker.lorem.paragraph()
const newsParagraph33 = faker.lorem.paragraph()
const newsParagraph34 = faker.lorem.paragraph()
const newsParagraph35 = faker.lorem.paragraph()
const newsParagraph36 = faker.lorem.paragraph()


// Faker Images
const newsImage1 = faker.image.city(600, 300)
const newsImage2 = faker.image.city(600, 300)
const newsImage3 = faker.image.city(600, 300)
const newsImage4 = faker.image.cats(600, 300)
const newsImage5 = faker.image.fashion(600, 300)
const newsImage6 = faker.image.food(600, 300)

// Faker About
const about = faker.lorem.paragraphs()

const news1 = [title1, newsImage1, newsPreview1, newsParagraph21, newsParagraph31]
const news2 = [title2, newsImage2, newsPreview2, newsParagraph22, newsParagraph32]
const news3 = [title3, newsImage3, newsPreview3, newsParagraph23, newsParagraph33]
const news4 = [title4, newsImage4, newsPreview4, newsParagraph24, newsParagraph34]
const news5 = [title5, newsImage5, newsPreview5, newsParagraph25, newsParagraph35]
const news6 = [title6, newsImage6, newsPreview6, newsParagraph26, newsParagraph36]

let count = 0

app.get('/', (req, res) => {
    count++
    res.render('index', {
        news1: news1,
        news2: news2,
        news3: news3,
        news4: news4,
        news5: news5,
        news6: news6,
        count: count,
    })
})

app.get('/:path', (req, res) => {
    res.render(req.params.path, {
        news1: news1,
        news2: news2,
        news3: news3,
        news4: news4,
        news5: news5,
        news6: news6,
        about: about,
    }, (err, html) => {
        if (err) {
            console.log(err)
            res.render('error')
        } else {
            res.send(html)
        }
    })
})

module.exports = app