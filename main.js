const linksSocialMedia = {
  github: 'bmbelo87',
  youtube: 'brunosilver',
  facebook: 'brunosilver',
  instagram: 'brunosilver',
  twitter: '_brunosilver'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //Lê os filhos (li) dentro da ID socialLinks.
    console.log(li.children[0].href) //Verificação das redes sociais.
    const social = li.getAttribute('class') //Variável social recebe os nomes das classes das li.
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` //Renomeia os links a partir do primeiro filho.
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
