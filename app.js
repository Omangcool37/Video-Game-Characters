/**
 * name, alias, powers [], franchise, team [], alignment bool, enemies [], species
 */

const VideoGameCharacters = [
    {
        id: 'ca1',
        name: 'dante sparda',
        alias: 'tony redgrave',
        powers: ['demonic energy', 'master swordsman', 'marksman', 'flight', 'devil trigger'],
        franchise: 'capcom',
        team: ['devil may cry'],
        alignment: true,
        enimies: ['vergil sparda', 'mundus', 'nightmare', 'griffon'],
        race: 'hybrid',
        firstApp: new Date('August 23, 2001')
    },
    {
        id: 'ca1',
        name: 'vergil sparda',
        alias: 'neo angelo',
        powers: ['flight', 'master swordsman','devil trigger','demonic energy'],
        franchise: 'capcom',
        team: ['devil may cry'],
        alignment: true,
        enimies: ['dante sparda', 'mundus', 'griffon', 'nightmare'],
        species: 'hybrid',
        firstApp: new Date('August 23, 2001')
    },
    {
        id: 'ca3',
        name: 'nero',
        alias: 'the devil hunter',
        powers: ['swordsman', 'devil trigger','regeneration',' demonic energy'],
        franchise: 'capcom',
        team: ['devil may cry'],
        alignment: true,
        enimies: ['dante sparda', 'mundus', 'griffon', 'nightmare', 'vergil sparda'],
        race: 'hybrid',
        firstApp: new Date('January 31, 2008')
    },
    {
        id: 'd1',
        name: 'ikora rey',
        alias: 'warlock vangaurd',
        powers: ['light empowerment', 'void manipulation', 'solar energy', 'arc energy'],
        franchise: 'destiny',
        team: ['the vangaurd'],
        alignment: true,
        enimies: ['hive','scorn','taken','the vex', 'dread', 'the witness'],
        race: 'human',
        firstApp: new Date('September 9, 2014')
    },
    {
        id: 'd2',
        name: 'the young wolf',
        alias: 'god slayer',
        powers: ['light empowerment', 'void manipulation', 'solar energy', 'arc energy'],
        franchise: 'destiny',
        team: ['the vangaurd'],
        alignment: true,
        enimies: ['hive', 'scorn','taken', 'the vex', 'dread', 'the witness'],
        race: 'human',
        firstApp: new Date('September 9, 2014')
    },
    {
        id: 'd3',
        name: 'osiris',
        alias: 'scholar of the cosmos',
        powers: ['light empowerment', 'void manipulation', 'solar energy', 'arc energy'],
        franchise: 'destiny',
        team: ['the vangaurd'],
        alignment: true,
        enimies: ['hive', 'scorn','taken','the vex', 'dread', 'the witness'],
        race: 'human',
        firstApp: new Date('September 9, 2014')
        
    },
    {
        id: 'as1',
        name: ' edward kenway',
        alias: 'assassin',
        powers: ['master swordsmen', 'master marksmen', 'master sails man', 'stealth'],
        franchise: 'assassins creed',
        team: ['the brotherhood'],
        alignment: true,
        enimies: ['the templar order'],
        race: 'human',
        firstApp: new Date('December 4, 2012')
    },
    {
        id: 'as2',
        name: 'altaïr ibn-la ahad',
        alias: 'assassin',
        powers: ['master swordsmen', 'master marksmen', 'master sails man', 'stealth'],
        franchise: 'assassins creed',
        team: ['the brotherhood'],
        alignment: true,
        enimies: ['the templar order'],
        race: 'human',
        firstApp: new Date('November 13, 2007')
    },
    {
        id: 'as3',
        name: 'azio auditore da firenze',
        alias: 'assassin',
        powers: ['master swordsmen', 'master marksmen', 'master sails man', 'stealth'],
        franchise: 'assassins creed',
        team: ['the brotherhood'],
        alignment: true,
        enimies: ['the templar order'],
        race: 'human',
        firstApp: new Date('October 26, 2009')
    },
    {
        id: 'go1',
        name: 'kratos',
        alias: 'ghost of sparda',
        powers: ['divinity', 'rage empowerment', 'superstregnth', 'weapons master'],
        franchise: 'god of war',
        team: ['the nine realms'],
        alignment: true,
        enimies: ['zeus', 'ares','poseidon', 'apollo', 'hades' ],
        race: 'god',
        firstApp: new Date('March 22, 2005')
    },
    {
        id: 'go2',
        name: 'atreus',
        alias: 'loki',
        powers: ['archer', 'shapeshifter', 'magic'],
        franchise: 'god of war',
        team: ['the nine realms'],
        alignment: true,
        enimies: ['heimdoll','dragur','dark elves'],
        race: 'god',
        firstApp: new Date('April 20, 2018')
    },
    {
        id: 'go3',
        name: 'baldur',
        alias: 'gleaming god',
        powers: ['true invulnerability', 'photokinesis','superstrength'],
        franchise: 'god of war',
        team: ['asgard'],
        alignment: true,
        enimies: ['freya', 'kratos','jotnar'],
        race: 'god',
        firstApp: new Date('April 20, 2018')
    },
   
]


const row = document.getElementById('row')

const makeList =(el, arr)=> {

    if (arr.length == 0) {
        const li = document.createElement('li')

        li.classList.add('list-group-item')

        li.innerText = 'none'

        el.appendChild(li)
    }

    arr.forEach(item => {
        const li = document.createElement('li')
        li.classList.add('list-group-item', 'text-capitalize')

        li.innerText = item 

        el.appendChild(li)
        
    })
}

const buildCards =(obj)=> {


   

    const column = document.createElement('div')
    column.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')
    card.setAttribute('id', `card-${obj.id}`)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')

    const alias = document.createElement('h4')
    alias.classList.add('text-capitalize')
    alias.innerText = obj.alias

    const heroName = document.createElement('p')
    heroName.classList.add('text-capitalize', 'fst-italic')
    heroName.innerText = obj.name

    const powersLabel = document.createElement('h3')
    powersLabel.classList.add('text-capitalize', 'text-danger')
    powersLabel.innerText = 'powers'

    const powersList = document.createElement('ul')
    powersList.classList.add('list-group', 'list-group-flush')

    if (typeof(obj.powers) === 'object') {
        makeList(powersList, obj.powers)
    }

    const teamsLabel = document.createElement('h3')
    teamsLabel.classList.add('text-capitalize', 'text-primary')
    teamsLabel.innerText = 'teams'

    const teamsList = document.createElement('ul')
    teamsList.classList.add('list-group', 'list-group-flush')

    if (typeof(obj.team) === 'object') {
        makeList(teamsList, obj.team)
    }

    const enimiesLabel = document.createElement('h3')
    enimiesLabel.classList.add('text-capitalize', 'text-primary')
    enimiesLabel.innerText = 'enimies'

    const enimiesList = document.createElement('ul')
    enimiesList.classList.add('list-group', 'list-group-flush')

    if (typeof(obj.enimies) === 'object') {
        makeList(enimiesList, obj.eniemies)
    }

   
    const cardFooter = document.createElement('div')
    cardFooter.classList.add('card-footer')

    cardFooter.innerHTML = `
        <p class="card-text">Race: ${obj.Race}</p>
        <p class="card-text">Franchise: ${obj.franchise}</p>
        <p class="card-text">First App: ${obj.firstApp.getMonth() +1 }/${obj.firstApp.getFullYear()}</p`

    cardHeader.appendChild(alias)
    cardHeader.appendChild(videocharacterName)
   
    card.appendChild(cardHeader)

    cardBody.appendChild(powersLabel)
    cardBody.appendChild(powersList)

    cardBody.appendChild(teamsLabel)
    cardBody.appendChild(teamsList)

    cardBody.appendChild(enimiesLabel)
    cardBody.appendChild(enimiesList)

    card.appendChild(cardBody)
    card.appendChild(cardFooter)
    column.appendChild(card)

    row.appendChild(column)

}


const loadCards =(arr)=> {
    arr.forEach(item => buildCards(item))
}

const loadBtn = document.getElementById('loadBtn')


loadBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    row.innerHTML = ''

    const filter = document.getElementById('filter').value 

   

    let cards = VideoGameCharacters.filter(VideoGameCharacters => Object.values(VideoGameCharacters).includes(filter))


    console.log(cards);
    

    loadCards(cards)
})



}

