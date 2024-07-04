import { Controller, Get, Query } from '@nestjs/common';
import { LeaguesService } from './leagues.service';

@Controller('leagues')
export class LeaguesController {
    constructor(private readonly leaguesService: LeaguesService) {}

    @Get()
    async findByCountry(@Query('country') country: string) {
        return await this.leaguesService.findLeaguesByCountry(country);
    }
}
