import React, { Component } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import '../css/Dash02.css'

class Dash02 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            groupId: 'ddc295ab-9461-4add-9020-d4ec82b23a1a',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=ddc295ab-9461-4add-9020-d4ec82b23a1a&groupId=904bda2e-285b-4976-ae13-983ec7d0499a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGZiYjUxMzQtOWM2YS00MThkLTkyMDUtZTMxNDMxNDZkYmEwLyIsImlhdCI6MTcxNzUyMTI1MSwibmJmIjoxNzE3NTIxMjUxLCJleHAiOjE3MTc1MjY1MDEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFnSkxZSUpwNFpFU2ErOE5DS0owL25lWEtpeFpjUFFFRE9LZGdzVTlHenBmVHlEaXNid0x2NWRRdm9RU20yN2U1c1pnaVBUcGppemhyc2JySllQOEczUzJGRDYrdkxGYmtWQThrdTgwQ3B2bz0iLCJhbXIiOlsicHdkIiwicnNhIiwibWZhIl0sImFwcGlkIjoiMThmYmNhMTYtMjIyNC00NWY2LTg1YjAtZjdiZjJiMzliM2YzIiwiYXBwaWRhY3IiOiIwIiwiZGV2aWNlaWQiOiI1ZDYzNGY5YS1kN2I1LTRlOWQtYTJhYi1lODYxMGJjMDJiNGQiLCJmYW1pbHlfbmFtZSI6Ik1hY2hhZG8gMDIiLCJnaXZlbl9uYW1lIjoiUmFmYWVsIiwiaXBhZGRyIjoiMjgwNDoxNGQ6ODgwOjkwNDY6OGI0ZjoyZDQ0OjkzYzc6MjY3YiIsIm5hbWUiOiJSYWZhZWwgTWFjaGFkbyAwMiIsIm9pZCI6IjQ2NDcxMjkzLWZlMDMtNGJhOS1hMTBlLTM0OWNiYjZiYWYzYiIsInB1aWQiOiIxMDAzMjAwMzZFQkZDOTA4IiwicmgiOiIwLkFTWUFORkc3VDJxY2pVR1NCZU1VTVViYm9Ba0FBQUFBQUFBQXdBQUFBQUFBQUFBbUFIUS4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBJdGVtLkV4ZWN1dGUuQWxsIEl0ZW0uUmVhZFdyaXRlLkFsbCBJdGVtLlJlc2hhcmUuQWxsIE9uZUxha2UuUmVhZC5BbGwgT25lTGFrZS5SZWFkV3JpdGUuQWxsIFBpcGVsaW5lLkRlcGxveSBQaXBlbGluZS5SZWFkLkFsbCBQaXBlbGluZS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFJlcHJ0LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5HaXRDb21taXQuQWxsIFdvcmtzcGFjZS5HaXRVcGRhdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlF0UUxFV1VZbkI3Q0x2YnJJUGdzUzhEU0l1RGpfeGNNSTBlQ0l3VkoybmsiLCJ0aWQiOiI0ZmJiNTEzNC05YzZhLTQxOGQtOTIwNS1lMzE0MzE0NmRiYTAiLCJ1bmlxdWVfbmFtZSI6InJhZmFlbC5tYWNoYWRvMDJAb2tlYWF0ZWNub2xvZ2lhLmNvbS5iciIsInVwbiI6InJhZmFlbC5tYWNoYWRvMDJAb2tlYWF0ZWNub2xvZ2lhLmNvbS5iciIsInV0aSI6InZ1ZTBqYVhDMjBXQ25FZWgwM2doQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Bl6KZJMJSOJurKJwYPgXUwxynXi-l6ya8q15A3yeb8uEvdvnnfvyzCUN29l8e1haU4QUkgQWiFcKo2uQ6cXByM-MFeWs6KL64vLC7sPaUkMA_k54qfgjjRQRu00nIY4OcVxOCEYY4sj3Ee8iRjk65-VDA-I8TZW5LnwjUVArpI-4LM1SBujfFYSxRTsG86bdtSwENBBNlEyW5y86BnaYPX1HB5dZdhRKSsLT1VGQOwIsOicS63aeAlF0YpJv_UFqzmJ9yHlx99hHkj3sBgkkCDoAmjKX-_6kcLhM5Cg84HF48RP4r3YDlYlNSeNjZOMo_GZc_-hcfa7KvwbCH16VtQ'
        };
    }

    render() {
        return (
            <PowerBIEmbed
                embedConfig={{
                    type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    id: this.state.groupId,
                    embedUrl: this.state.embedUrl,
                    accessToken: this.state.accessToken,
                    tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: false
                            }
                        },
                        background: models.BackgroundType.Transparent,
                    }
                }}

                eventHandlers={
                    new Map([
                        ['loaded', function () { console.log('Report loaded'); }],
                        ['rendered', function () { console.log('Report rendered'); }],
                        ['error', function (event) { console.log(event.detail); }],
                        ['visualClicked', () => console.log('visual clicked')],
                        ['pageChanged', (event) => console.log(event)],
                    ])
                }

                cssClassName={"Embed-container"}

                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport;
                }}
            />
        );
    }
}

export default Dash02;
