const router = require('express').Router();

let moviedata = [
    {
        name: "Humra Lehenga Ke Andar Wi-Fi",
        translation: "Wi-Fi Inside My Lehenga",
        releaseDate: "January 2020"
    },
    {
        name: "Pepsi Peeke Laagelu Sexy",
        translation: "Looking Sexy Drinking Pepsi",
        releaseDate: "February 2020"
    },
    {
        name: "Laila Maal Ba Chhaila Dhamaal Ba",
        translation: "Sexy Girl, Rocking Guy",
        releaseDate: "March 2020"
    },
    {
        name: "Lehenga Mein Baad Aail Ba",
        translation: "The Lehenga Has Flooded",
        releaseDate: "April 2020"
    },
    {
        name: "Haraami Kela",
        translation: "Bastard Banana",
        releaseDate: "May 2020"
    },
    {
        name: "Saali Badi Sataaveli",
        translation: "Sister-In-Law Very Naughty",
        releaseDate: "June 2020"
    },
    {
        name: "Miya Anari Ba Biwi Khilari Ba",
        translation: "Husband Is A Dumbass, Wife Is A Player.",
        releaseDate: "July 2020"
    },
    {
        name: "Jeans Wali Bhauji",
        translation: "Jeans-Wearing Sister-In-Law",
        releaseDate: "August 2020"
    },
    {
        name: "Mehraru Chahiye Milky White",
        translation: "Want A Milky White Wife.",
        releaseDate: "September 2020"
    },
    {
        name: "Ek Laila Teen Chhaila",
        translation: "One Woman, Three Lovers",
        releaseDate: "October 2020"
    },
    {
        name: "Tohre Kaaran Gaeel Bhensiya Paani Mein",
        translation: "The Buffalo Has Gone Into The Water Because Of You.",
        releaseDate: "November 2020"
    },
    {
        name: "Pandit Ji Batayee Na, Byaa Kab Hoyi",
        translation: "Panditji, Tell Me When I'll Get Married.",
        releaseDate: "December 2020"
    },
    {
        name: "Mehraru Bina Ratiya Kaise Kati",
        translation: "How To Spend The Night Without A Wife",
        releaseDate: "January 2021"
    }
];

router.get('/movies', (req, res) => {
    res.json(moviedata);
});

module.exports = router;