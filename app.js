const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];


$('body').prepend('<h1>Products<h1>');
$('body').append('<hr class="line">');
$('h1,hr').wrap('<div class="top"></div>')
$('body').append('<div class="boxes"><br></div>')

storeItems.forEach(function(item, i){

  
  if(item.inStock === true){
    let a = item.price;
    let b = item.name;
    let c = item.details;
    $('.boxes').append('<p class="'+"o"+i+'" >'+'$'+a+'</p>')
    $('.boxes').append('<p class="'+"o"+i+'" >'+b+'</p>')
    $('.boxes').append('<p class="'+"o"+i+'" >'+c+'</p>')
    $(".o"+i).wrapAll('<div class="flex colorW" ></div>')
    
  }
  
});


$('body').append('<button onclick="dark()" class="tb tbW">Toggle Dark Mode</button>')
$('body').addClass("WW")
function dark(){
    $('.flex').toggleClass('colorW')
    $('.flex').toggleClass('colorB')
    $('body').toggleClass('WW')
    $('body').toggleClass('BB')
    $('button').toggleClass('tbW')
    $('button').toggleClass('tbB')
}