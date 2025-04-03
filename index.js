import chalk from "chalk";
import fs from "fs";

const userInfo = async (token) => {
    const url = "https://api.padolabs.org/users/info"

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en,en-US;q=0.9,id;q=0.8',
        'authorization': `Bearer ${token}`,
        'client-type': 'WEB',
        'client-version': '0.3.29',
        'content-type': 'application/json',
        'dnt': '1',
        'priority': 'u=1, i',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'none',
        'sec-fetch-storage-access': 'active',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
    }

    while(true){
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(chalk.red(`❌ Error to get user: ${err.message}`))
        }
    }
}

const dailyCheckin = async (token) => {
    const url = "https://api.padolabs.org/achievement/complete"

    const payload = JSON.stringify({
        "taskIdentifier": "DAILY_CHECK_IN",
        "ext": {}
    })

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en,en-US;q=0.9,id;q=0.8',
        'authorization': `Bearer ${token}`,
        'client-type': 'WEB',
        'client-version': '0.3.29',
        'content-type': 'application/json',
        'dnt': '1',
        'priority': 'u=1, i',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'none',
        'sec-fetch-storage-access': 'active',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
    }

    while(true){
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: payload
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(chalk.red(`❌ Error to daily check-in: ${err.message}`))
        }
    }
}

const checkDiscordGM = async (token) => {
    const url = "https://api.padolabs.org/achievement/discord/gm/check?"

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en,en-US;q=0.9,id;q=0.8',
        'authorization': `Bearer ${token}`,
        'client-type': 'WEB',
        'client-version': '0.3.29',
        'content-type': 'application/json',
        'dnt': '1',
        'priority': 'u=1, i',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'none',
        'sec-fetch-storage-access': 'active',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
    }

    while(true){
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(chalk.red(`❌ Error to check discord: ${err.message}`))
        }
    }
}

const sendMessage = async (tokendc) => {
    const url = "https://discord.com/api/v9/channels/1257875620365471830/messages"

    const payload = JSON.stringify({
        "content": "gm"
    })
    
    const headers = {
        'accept': '*/*',
        'accept-language': 'en,en-US;q=0.9,id;q=0.8',
        'authorization': `${tokendc}`,
        'content-type': 'application/json',
        'dnt': '1',
        'origin': 'https://discord.com',
        'priority': 'u=1, i',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    }

    while(true){
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: payload
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(chalk.red(`❌ Error to send message: ${err.message}`))
        }
    }
}

const dailyGM = async (token) => {
    const url = "https://api.padolabs.org/achievement/complete"

    const payload = JSON.stringify({
        "taskIdentifier": "DAILY_DISCORD_GM",
        "ext": {}
    })
    
    const headers = {
        'accept': 'application/json',
        'accept-language': 'en,en-US;q=0.9,id;q=0.8',
        'authorization': `Bearer ${token}`,
        'client-type': 'WEB',
        'client-version': '0.3.29',
        'content-type': 'application/json',
        'dnt': '1',
        'priority': 'u=1, i',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'none',
        'sec-fetch-storage-access': 'active',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
    }

    while(true){
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: payload
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(chalk.red(`❌ Error to daily gm: ${err.message}`))
        }
    }
}

(async () => {
    console.log("🤖 Primus Daily Check-in & GM")

    // const token = ""
    // const tokendc = ""

    try {
        // read tokens.txt
        const data = fs.readFileSync('tokens.txt', 'utf-8')
        const tokens = data.split('\n')

        for (const token of tokens) {
            if(token!="") {
                const tokennya = token.trim()
                const primtoken = tokennya.split('|')[0]
                const dctoken = tokennya.split('|')[1]

                const user = await userInfo(primtoken)
                if (user.result!=null) {
                    console.log(`\n🔑 EVM address: ${chalk.green(String(user.result.mainWallet).slice(0,7))}`)

                    // check in
                    const daily = await dailyCheckin(primtoken)
                    // console.log(daily.result == null)

                    let status = ""
                    if (daily.result!=null) {
                        status = chalk.yellow("Sedang check-in")
                    } else {
                        status = chalk.green("Sudah check-in")
                    }

                    // cek status discord gm
                    const checkdc = await checkDiscordGM(primtoken)
                    // console.log(checkdc)

                    let statusdc = ""
                    if (!checkdc.result.hasFinished && !checkdc.result.hasSendGm) {
                        statusdc = chalk.yellow("Daily GM tersedia")
                    } else {
                        statusdc = chalk.green("Sudah GM")
                    }

                    console.log(`📊 Status daily: ${status}\n🌞 Status GM: ${statusdc}`)

                    // mengrim pesan
                    if (statusdc!=chalk.green("Sudah GM")) {
                        console.log("🚀 Mengirim pesan gm ke channel...")
                        const sendbang = await sendMessage(dctoken)
                        console.log(`💬 Message Id: ${chalk.yellow(sendbang.id)}`)
                        
                        // check gm
                        console.log("🔄 Sedang proses cek...")
                        const cekbang = await dailyGM(primtoken)
                        if (cekbang.result!=null) {
                            console.log(chalk.green("🟢 Cek GM sukses"))
                        } else {
                            console.log(chalk.red("🔴 Cek GM gagal"))
                        }
                    } 
                }
            }
        }
    } catch (e) {
         // jika tokens.txt not exist
         if (e.code == 'ENOENT') {
            console.log('📝 Fill the tokens.txt first!');
            fs.writeFileSync('tokens.txt', "token|authdctoken\ntoken|authdctoken\netc...")
            process.exit()
        } else {
            throw e
        }
    }

    


})()