class Github {
  constructor() {
    this.client_id = '286f17ace0a048c4eefe'; 
    this.client_secret = '13297a507bfb2d647dfbdcb4469c475324ad9ed8'; 
    this.repos_count = 5; 
    this.repos_sort = 'created: asc'; 
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`); 
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`); 
    

    const profile = await profileResponse.json(); 
    const repos = await repoResponse.json(); 


    return {
      profile,
      repos
    }

  }

}