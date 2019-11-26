if (typeof canvas == "undefined") var canvas = document.getElementById("myCanvas");
window.ruNcF = {
    "rfGsF": {
        "default": {
            "rfGsE": "webgl",
            "lang": "cn",
            "rfGsC": "run_",
            "rfGsB": "run",
        }
    },
    "rfGsA": {
        "qfIq": {
            "s": {
                "files": ["reNsK.png", "rfPyK.png", "rfNrF.png", "rfNrE.png", "rfKsF.png", "reNsG.jpg", "rfKyF.png", "rfKyC.png", "rfJqK.png", "rfJqJ.png", "rfJwG.png", "rfJyA.png", "rfJzH.png", "rfHrD.png"],
                "maxScale": 0.55
            }
        },
        "fonts": {},
        "bitmapfonts": {
            "en": {
                "list": []
            },
            "cn": {
                "list": []
            }
        }
    },
    "cn": "U2NvcmUsU2NvcmUNCktleXMsS2V5cw0KUGVsbGV0cyxQZWxsZXRzDQpQYXVzZSxQYXVzZQ0KUmV0cnksUmV0cnkNCkJhY2sgdG8gbWFwLEJhY2sgdG8gbWFwDQpTb3VuZCBvbixTb3VuZCBvbg0KU291bmQgb2ZmLFNvdW5kIG9mZg0KUmVzdW1lLFJlc3VtZQ0KTGV2ZWwsTGV2ZWwNCkNvbGxlY3QgcGVsbGV0cyEsQ29sbGVjdCBwZWxsZXRzIQ0KRGVmZWF0IHRoZSBnaG9zdHMhLERlZmVhdCB0aGUgZ2hvc3RzIQ0KQ29sbGVjdCBjaGVycmllcyEsQ29sbGVjdCBjaGVycmllcyENClJhY2UgdG8gdGhlIGZpbmlzaCEsUmFjZSB0byB0aGUgZmluaXNoIQ0KU3RhcnQsU3RhcnQNClNlbGVjdCBhIHBvd2VydXA6LFNlbGVjdCBhIHBvd2VydXA6DQpQZWxsZXRzOixQZWxsZXRzOg0KWW91IGRvbid0IGhhdmUgZW5vdWdoIHBlbGxldHMhLFlvdSBkb24ndCBoYXZlIGVub3VnaCBwZWxsZXRzIQ0KWW91IHJlcXVpcmU6LFlvdSByZXF1aXJlOg0KWW91IHdpbGwgc3BlbmQ6LFlvdSB3aWxsIHNwZW5kOg0KUGF5LFBheQ0Ka2V5cyxrZXlzDQpjb250aW51ZSxjb250aW51ZQ0KVHJhdmVsIHRvIHRoZSBuZXh0IHdvcmxkPyxUcmF2ZWwgdG8gdGhlIG5leHQgd29ybGQ/DQpZb3UgbmVlZCB0byBjb2xsZWN0IHswfSBtb3JlIGtleXMhLFlvdSBuZWVkIHRvIGNvbGxlY3QgezB9IG1vcmUga2V5cyENCnVubG9jayx1bmxvY2sNCkxldmVsIGxvc3QsTG9zdCENCk91dCBvZiBsaXZlcyEsT3V0IG9mIGxpdmVzIQ0KTm90IGVub3VnaCBwZWxsZXRzISxOb3QgZW5vdWdoIHBlbGxldHMhDQpOb3QgZW5vdWdoIGdob3N0cyEsTm90IGVub3VnaCBnaG9zdHMhDQpOb3QgZW5vdWdoIGtleXMhLE5vdCBlbm91Z2gga2V5cyENCk91dCBvZiB0aW1lISxPdXQgb2YgdGltZSENCk5vdCBlbm91Z2ggY2hlcnJpZXMhLE5vdCBlbm91Z2ggY2hlcnJpZXMhDQpLZXlzIGZvdW5kOixLZXlzIGZvdW5kOg0KQmFjayB0byBtYXAsQmFjayB0byBtYXANClJldHJ5LFJldHJ5DQpMZXZlbCB3b24hLFdvbiENClBlbGxldHMgd29uOixQZWxsZXRzIHdvbjoNClNjb3JlOixTY29yZToNClNjb3JlIFZhbHVlOixTY29yZToNCkJhY2sgdG8gbWFwLEJhY2sgdG8gbWFwDQpSZXRyeSxSZXRyeQ0KQ29uZ3JhdHVsYXRpb25zISxDb25ncmF0dWxhdGlvbnMhDQpZb3UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBtYXplISxZb3UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBtYXplIQ0KQmFjayB0byBtYXAsQmFjayB0byBtYXANCkNyZWRpdHMsQ3JlZGl0cw0KT3V0IG9mIHRpbWUhIFdhdGNoIGEgdmlkZW8gdG8gY29udGludWUgcGxheWluZyEsT3V0IG9mIHRpbWUhIFdhdGNoIGEgdmlkZW8gdG8gY29udGludWUgcGxheWluZyENCk91dCBvZiBsaXZlcyEgV2F0Y2ggYSB2aWRlbyB0byBjb250aW51ZSBwbGF5aW5nISxPdXQgb2YgbGl2ZXMhIFdhdGNoIGEgdmlkZW8gdG8gY29udGludWUgcGxheWluZyENCndhdGNoIHZpZGVvLHdhdGNoIHZpZGVvDQpjb250aW51ZSxjb250aW51ZQ0KU3dpcGUgdG8gbW92ZSxTd2lwZSB0byBtb3ZlDQp0byBtb3ZlLHRvIG1vdmUNCkF2b2lkIHRoZSBnYXBzISxBdm9pZCB0aGUgZ2FwcyENClN3aXBlIHRvIGp1bXAhLFN3aXBlIHRvIGp1bXAhDQpQcmVzcyB0aGUgVVAga2V5IHRvIGp1bXAsUHJlc3MgdGhlIFVQIGtleSB0byBqdW1wDQpTd2lwZSB1cCB0d2ljZSB0byBhaXIgZGFzaCEsU3dpcGUgdXAgdHdpY2UgdG8gYWlyIGRhc2ghDQp0d2ljZSB0byBhaXIgZGFzaCx0d2ljZSB0byBhaXIgZGFzaA0KU3dpcGUgZG93biB0byBzbGlkZSEsU3dpcGUgZG93biB0byBzbGlkZSENCnRvIHNsaWRlISx0byBzbGlkZSENClN3aXBlIGRvd24gdHdpY2UgdG8gcG93ZXJzbGlkZSEsU3dpcGUgZG93biB0d2ljZSB0byBwb3dlcnNsaWRlIQ0KdHdpY2UgdG8gcG93ZXJzbGlkZSEsdHdpY2UgdG8gcG93ZXJzbGlkZSENClN3aXBlIHRvIHRha2UgdGhlIGNvcm5lciEsU3dpcGUgdG8gdGFrZSB0aGUgY29ybmVyIQ0KdG8gdGFrZSB0aGUgY29ybmVyISx0byB0YWtlIHRoZSBjb3JuZXIhDQpuL2Esbi9hDQpDSEVDS1BPSU5ULENIRUNLUE9JTlQNClNUQVJULFNUQVJUDQpGSU5JU0gsRklOSVNIDQpBV0VTT01FISxBV0VTT01FIQ0KRkFOVEFTVElDISxGQU5UQVNUSUMhDQpHUkVBVCEsR1JFQVQhDQpNb3JlIGdhbWVzLCBNb3JlIGdhbWVzDQpwbGF5LHBsYXkNCkluYy4sSW5jLg0KTG9hZGluZyxMb2FkaW5nDQpGVVVVVVVVVVUsRlVVVVVVVVVV",
    "rfKsE": {
        "name": "rfKsE",
        "children": [{
            "name": "rfNxGbackground",
            "type": "Image",
            "x": "0",
            "y": "0",
            "width": "2160",
            "height": "1920",
            "rfPwF": "0.5",
            "rfPwE": "0.5",
            "rfIqA": "1",
            "rfIrK": "1",
            "rfIqD": "0",
            "rfIxE": "true",
            "image": "rfPxF.jpg",
            "children": []
        }, {
            "name": "rfNrCrfJyB",
            "type": "Group",
            "x": "0",
            "y": "-488",
            "width": "100",
            "height": "100",
            "rfPwF": "0.5",
            "rfPwE": "0.5",
            "rfIqA": "1",
            "rfIrK": "1",
            "rfIqD": "0",
            "rfIxE": "true",
            "children": [{
                "name": "rfPyJrfIsA",
                "type": "Button",
                "x": "0",
                "y": "0",
                "width": "382",
                "height": "191",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "image": "rfOqA.png",
                "rfNvC": "",
                "rfJyD": "rfOrK.png",
                "rfOxE": "",
                "children": [{
                    "name": "rfLwCplay",
                    "type": "rflwd",
                    "x": "0",
                    "y": "0",
                    "width": "810",
                    "height": "540",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "A",
                    "fontSize": "90",
                    "text": "play",
                    "rfNvJ": "rfOsH",
                    "color": "#F8DF55",
                    "children": []
                }]
            }, {
                "name": "rfNxGrfKsC",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "381",
                "height": "200",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfKsC.png",
                "children": []
            }, {
                "name": "rfNrCrfJzA",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfJtGrfIxD",
                    "type": "rfjwf",
                    "x": "-190.5",
                    "y": "100",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfIxD (1)",
                    "type": "rfjwf",
                    "x": "190.5",
                    "y": "100",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfIxD (2)",
                    "type": "rfjwf",
                    "x": "190.5",
                    "y": "-100",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfIxD (3)",
                    "type": "rfjwf",
                    "x": "-190.5",
                    "y": "-100",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfIxD (4)",
                    "type": "rfjwf",
                    "x": "-190.5",
                    "y": "52",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfJsA",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfJrB",
                    "type": "Image",
                    "x": "-130",
                    "y": "100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (1)",
                    "type": "Image",
                    "x": "-80",
                    "y": "100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (2)",
                    "type": "Image",
                    "x": "-30",
                    "y": "100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (3)",
                    "type": "Image",
                    "x": "20",
                    "y": "100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (4)",
                    "type": "Image",
                    "x": "70",
                    "y": "100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (5)",
                    "type": "Image",
                    "x": "120",
                    "y": "100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (6)",
                    "type": "Image",
                    "x": "170",
                    "y": "100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (7)",
                    "type": "Image",
                    "x": "190.5",
                    "y": "70",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (8)",
                    "type": "Image",
                    "x": "190.5",
                    "y": "20",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (9)",
                    "type": "Image",
                    "x": "190.5",
                    "y": "-30",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (10)",
                    "type": "Image",
                    "x": "190.5",
                    "y": "-80",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (11)",
                    "type": "Image",
                    "x": "160",
                    "y": "-100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (12)",
                    "type": "Image",
                    "x": "110",
                    "y": "-100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (13)",
                    "type": "Image",
                    "x": "60",
                    "y": "-100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (14)",
                    "type": "Image",
                    "x": "10",
                    "y": "-100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (15)",
                    "type": "Image",
                    "x": "-40",
                    "y": "-100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (16)",
                    "type": "Image",
                    "x": "-90",
                    "y": "-100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (17)",
                    "type": "Image",
                    "x": "-140",
                    "y": "-100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (18)",
                    "type": "Image",
                    "x": "-190",
                    "y": "-100",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (19)",
                    "type": "Image",
                    "x": "-190",
                    "y": "-50",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (20)",
                    "type": "Image",
                    "x": "-190",
                    "y": "0",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrB (21)",
                    "type": "Image",
                    "x": "-190",
                    "y": "50",
                    "width": "14",
                    "height": "13",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsB.png",
                    "children": []
                }]
            }, {
                "name": "rfNxGrfKyH",
                "type": "Image",
                "x": "-190.5",
                "y": "100",
                "width": "70",
                "height": "34",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfKtK.png",
                "children": []
            }, {
                "name": "rfNxGrfKyG",
                "type": "Image",
                "x": "-190.5",
                "y": "100",
                "width": "80",
                "height": "34",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfKtJ.png",
                "children": []
            }]
        }, {
            "name": "rfPyJrfOyE",
            "type": "Button",
            "x": "-15",
            "y": "15",
            "rfJzF": "true",
            "rfJwB": "1",
            "rfJwA": "0",
            "rfKxB": "0",
            "rfKxA": "0",
            "width": "160",
            "height": "160",
            "rfPwF": "1",
            "rfPwE": "0",
            "rfIqA": "1",
            "rfIrK": "1",
            "rfIqD": "0",
            "rfIxE": "true",
            "image": "rfOqC.png",
            "rfNvC": "",
            "rfJyD": "",
            "rfOxE": "",
            "children": []
        }, {
            "name": "rfPyJrfOyF",
            "type": "Button",
            "x": "-15",
            "y": "15",
            "rfJzF": "true",
            "rfJwB": "1",
            "rfJwA": "0",
            "rfKxB": "0",
            "rfKxA": "0",
            "width": "160",
            "height": "160",
            "rfPwF": "1",
            "rfPwE": "0",
            "rfIqA": "1",
            "rfIrK": "1",
            "rfIqD": "0",
            "rfIxE": "true",
            "image": "rfOqD.png",
            "rfNvC": "",
            "rfJyD": "",
            "rfOxE": "",
            "children": []
        }]
    },
    "reNsJ": {
        "frames": [{
            "rfGvB": "rfOqD.png",
            "frame": {
                "x": 425,
                "y": 1,
                "w": 104,
                "h": 104
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 104,
                "h": 104
            },
            "rfGwG": {
                "w": 104,
                "h": 104
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOqC.png",
            "frame": {
                "x": 531,
                "y": 1,
                "w": 104,
                "h": 104
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 104,
                "h": 104
            },
            "rfGwG": {
                "w": 104,
                "h": 104
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOqA.png",
            "frame": {
                "x": 213,
                "y": 1,
                "w": 210,
                "h": 105
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 210,
                "h": 105
            },
            "rfGwG": {
                "w": 210,
                "h": 105
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrK.png",
            "frame": {
                "x": 637,
                "y": 1,
                "w": 204,
                "h": 98
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 204,
                "h": 98
            },
            "rfGwG": {
                "w": 204,
                "h": 98
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKsC.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 210,
                "h": 110
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 210,
                "h": 110
            },
            "rfGwG": {
                "w": 210,
                "h": 110
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKsB.png",
            "frame": {
                "x": 882,
                "y": 52,
                "w": 8,
                "h": 7
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 8,
                "h": 7
            },
            "rfGwG": {
                "w": 8,
                "h": 7
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKtK.png",
            "frame": {
                "x": 843,
                "y": 73,
                "w": 37,
                "h": 19
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 37,
                "h": 19
            },
            "rfGwG": {
                "w": 39,
                "h": 19
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKtJ.png",
            "frame": {
                "x": 898,
                "y": 52,
                "w": 38,
                "h": 19
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 6,
                "y": 0,
                "w": 38,
                "h": 19
            },
            "rfGwG": {
                "w": 44,
                "h": 19
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 958,
                "h": 114
            },
            "scale": "0.55"
        }
    },
    "reNsH": {
        "frames": [{
            "rfGvB": "rfPxF.jpg",
            "frame": {
                "x": 3,
                "y": 3,
                "w": 756,
                "h": 672
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 756,
                "h": 672
            },
            "rfGwG": {
                "w": 756,
                "h": 672
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 762,
                "h": 678
            },
            "scale": "0.35"
        }
    },
    "rfGrE": {
        "whIwqjkv": {
            "name": "whIwqjkv",
            "children": [{
                "name": "rfJtGtop",
                "type": "rfjwf",
                "x": "0",
                "y": "154",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "433",
                "height": "154",
                "rfPwF": "0.5",
                "rfPwE": "0",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfiqb.png",
                "children": []
            }, {
                "name": "rfJtGrfOsH",
                "type": "rfjwf",
                "x": "0",
                "y": "0",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "0.5",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "433",
                "height": "154",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfiqb.png",
                "children": []
            }, {
                "name": "rfJtGbottom",
                "type": "rfjwf",
                "x": "0",
                "y": "-154",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "433",
                "height": "154",
                "rfPwF": "0.5",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfiqb.png",
                "children": []
            }, {
                "name": "rfNrCrfOvE",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfItE",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "142",
                    "height": "214",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "reNwK.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIvF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "144",
                    "height": "209",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "reNwJ.png",
                    "children": []
                }, {
                    "name": "rfNxGrfKyK",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "80",
                    "height": "205",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "reNwH.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIqC",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "433",
                    "height": "154",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfiqb.png",
                    "children": []
                }]
            }]
        },
        "tbLsqhnr": {
            "name": "tbLsqhnr",
            "children": [{
                "name": "rfNrCrfOvJ",
                "type": "Group",
                "x": "0",
                "y": "-23",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfPxF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "962",
                    "height": "1362",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJwD.png",
                    "children": []
                }, {
                    "name": "rfIsDrfIyK",
                    "type": "rfisb",
                    "x": "10",
                    "y": "21",
                    "width": "664",
                    "height": "648",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIyK.png",
                    "children": []
                }, {
                    "name": "rfNxGrfNvH",
                    "type": "Image",
                    "x": "0",
                    "y": "-21",
                    "width": "875",
                    "height": "887",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKyD.png",
                    "children": []
                }, {
                    "name": "rfLwCtitle",
                    "type": "rflwd",
                    "x": "0",
                    "y": "600",
                    "width": "962",
                    "height": "114",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "C",
                    "fontSize": "85",
                    "text": "Congratulations!",
                    "rfNvJ": "rfOsH",
                    "color": "#63391D",
                    "children": []
                }, {
                    "name": "rfPyJrfJyC",
                    "type": "Button",
                    "x": "0",
                    "y": "-504",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqJ.png",
                    "rfNvC": "",
                    "rfJyD": "rfOqH.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCrfJyC",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "800",
                        "height": "300",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Back to map",
                        "rfNvJ": "rfOsH",
                        "color": "#F8DF55",
                        "children": []
                    }]
                }, {
                    "name": "rfLwCrfPxD",
                    "type": "rflwd",
                    "x": "-6",
                    "y": "447",
                    "width": "497",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "65",
                    "text": "You reached the end of the maze!",
                    "rfNvJ": "left",
                    "color": "#D08019",
                    "children": []
                }, {
                    "name": "rfPyJclose",
                    "type": "Button",
                    "x": "396",
                    "y": "613",
                    "width": "70",
                    "height": "69",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqE.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }]
            }]
        },
        "rfOyC": {
            "name": "rfOyC",
            "children": []
        },
        "taMwqjkv": {
            "name": "taMwqjkv",
            "children": [{
                "name": "rfNxGrfNrG",
                "type": "Image",
                "x": "0",
                "y": "0",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "2161",
                "height": "426",
                "rfPwF": "0.5",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwG.png",
                "children": []
            }, {
                "name": "rfNxGrfKrG",
                "type": "Image",
                "x": "29",
                "y": "685",
                "width": "525",
                "height": "195",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwK.png",
                "children": []
            }, {
                "name": "rfNxGrfIrG",
                "type": "Image",
                "x": "-370",
                "y": "685",
                "width": "261",
                "height": "195",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwJ.png",
                "children": []
            }, {
                "name": "rfNxGrfJrB",
                "type": "Image",
                "x": "-439",
                "y": "533",
                "width": "102",
                "height": "102",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwH.png",
                "children": []
            }, {
                "name": "rfLwCrfIrF",
                "type": "rflwd",
                "x": "-370",
                "y": "720",
                "width": "250",
                "height": "82",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "C",
                "fontSize": "60",
                "text": "Score",
                "rfNvJ": "rfOsH",
                "color": "#F9E055",
                "children": []
            }, {
                "name": "rfLwCrfNrJ",
                "type": "rflwd",
                "x": "426",
                "y": "533",
                "width": "288",
                "height": "206",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "60",
                "text": "999/999",
                "rfNvJ": "left",
                "color": "#FFFFFF",
                "children": []
            }, {
                "name": "rfJtGvaKxqjkv",
                "type": "rfjwf",
                "x": "-1.5",
                "y": "200",
                "width": "1000",
                "height": "300",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "",
                "children": []
            }, {
                "name": "rfLwCrfKqC",
                "type": "rflwd",
                "x": "-92",
                "y": "720",
                "width": "230",
                "height": "80",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "C",
                "fontSize": "60",
                "text": "Level",
                "rfNvJ": "rfOsH",
                "color": "#75FCBB",
                "children": []
            }, {
                "name": "rfJtGujPvqjkv",
                "type": "rfjwf",
                "x": "142",
                "y": "686",
                "width": "100",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "",
                "children": []
            }, {
                "name": "rfPyJpause",
                "type": "Button",
                "x": "404",
                "y": "682",
                "width": "189",
                "height": "189",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfPyJpause.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }, {
                "name": "rfLwCrfKrH",
                "type": "rflwd",
                "x": "-92",
                "y": "648.4001",
                "width": "178.1",
                "height": "150",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "80",
                "text": "1\n",
                "rfNvJ": "rfOsH",
                "color": "#75FBBA",
                "children": []
            }, {
                "name": "rfJtGriLyHqjkv",
                "type": "rfjwf",
                "x": "208",
                "y": "533",
                "width": "124",
                "height": "115",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "",
                "children": []
            }, {
                "name": "rfLwCrfIrJ",
                "type": "rflwd",
                "x": "-370",
                "y": "648.4",
                "width": "250",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "70",
                "text": "123456",
                "rfNvJ": "rfOsH",
                "color": "#F9E055",
                "children": []
            }, {
                "name": "rfLwCrfJsA",
                "type": "rflwd",
                "x": "-233",
                "y": "534",
                "width": "300",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "60",
                "text": "9999",
                "rfNvJ": "left",
                "color": "#F9E055",
                "children": []
            }, {
                "name": "rfJtGweOwqjkv",
                "type": "rfjwf",
                "x": "-81",
                "y": "532",
                "width": "100",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "",
                "children": []
            }]
        },
        "riMzJqjkv": {
            "name": "riMzJqjkv",
            "children": [{
                "name": "rfNxGrfNrG",
                "type": "Image",
                "x": "0",
                "y": "0",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "2161",
                "height": "426",
                "rfPwF": "0.5",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwG.png",
                "children": []
            }, {
                "name": "rfNxGrfKrG",
                "type": "Image",
                "x": "-17",
                "y": "-19",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "486",
                "height": "195",
                "rfPwF": "1",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIxH.png",
                "children": []
            }, {
                "name": "rfNxGrfIrG",
                "type": "Image",
                "x": "17",
                "y": "-19",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "484",
                "height": "195",
                "rfPwF": "0",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIxF.png",
                "children": []
            }, {
                "name": "rfNxGrfJsB",
                "type": "Image",
                "x": "510",
                "y": "-19",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "345",
                "height": "128",
                "rfPwF": "0",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIxG.png",
                "children": []
            }, {
                "name": "rfNxGrfNvF",
                "type": "Image",
                "x": "864.2",
                "y": "-19",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "345",
                "height": "128",
                "rfPwF": "0",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIxJ.png",
                "children": []
            }, {
                "name": "rfJtGriLyHqjkv",
                "type": "rfjwf",
                "x": "-727.9",
                "y": "-84",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "432",
                "height": "128",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwA.png",
                "children": []
            }, {
                "name": "rfLwCrfIrF",
                "type": "rflwd",
                "x": "251.1",
                "y": "-81.3",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "250",
                "height": "82",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "C",
                "fontSize": "60",
                "text": "Score",
                "rfNvJ": "rfOsH",
                "color": "#F9E055",
                "children": []
            }, {
                "name": "rfLwCrfNrJ",
                "type": "rflwd",
                "x": "-676",
                "y": "-87",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "270",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "65",
                "text": "999/999",
                "rfNvJ": "left",
                "color": "#FFFFFF",
                "children": []
            }, {
                "name": "rfLwCrfJsA",
                "type": "rflwd",
                "x": "723.1",
                "y": "-84",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "191.87",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "65",
                "text": "9999",
                "rfNvJ": "left",
                "color": "#F9E055",
                "children": []
            }, {
                "name": "rfJtGvaKxqjkv",
                "type": "rfjwf",
                "x": "-1.5",
                "y": "200",
                "width": "1000",
                "height": "300",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "",
                "children": []
            }, {
                "name": "rfLwCrfKqC",
                "type": "rflwd",
                "x": "-358.9",
                "y": "-86.9",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "230",
                "height": "80",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "C",
                "fontSize": "60",
                "text": "Level",
                "rfNvJ": "left",
                "color": "#75FCBB",
                "children": []
            }, {
                "name": "rfJtGujPvqjkv",
                "type": "rfjwf",
                "x": "-171",
                "y": "-116",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "100",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "",
                "children": []
            }, {
                "name": "rfLwCrfKrH",
                "type": "rflwd",
                "x": "-380.3",
                "y": "-159",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "178.1",
                "height": "120",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "85",
                "text": "1\n",
                "rfNvJ": "rfOsH",
                "color": "#75FBBA",
                "children": []
            }, {
                "name": "rfLwCrfIrJ",
                "type": "rflwd",
                "x": "251.1",
                "y": "-157.6",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "300",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "80",
                "text": "123456",
                "rfNvJ": "rfOsH",
                "color": "#F9E055",
                "children": []
            }, {
                "name": "rfJtGweOwqjkv",
                "type": "rfjwf",
                "x": "1036",
                "y": "-84",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "100",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "",
                "children": []
            }, {
                "name": "rfPyJpause",
                "type": "Button",
                "x": "803",
                "y": "15",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "0.5",
                "rfPwE": "0",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfOqB.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }, {
                "name": "rfPyJrfOyF",
                "type": "Button",
                "x": "983",
                "y": "15",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "0.5",
                "rfPwE": "0",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfOqD.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }, {
                "name": "rfPyJrfOyE",
                "type": "Button",
                "x": "983",
                "y": "15",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "0.5",
                "rfPwE": "0",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfOqC.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }]
        },
        "xdKsqhnr": {
            "name": "xdKsqhnr",
            "children": [{
                "name": "rfNrCrfOvJ",
                "type": "Group",
                "x": "0",
                "y": "-23",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfPxF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "962",
                    "height": "1362",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJwD.png",
                    "children": []
                }, {
                    "name": "rfPyJclose",
                    "type": "Button",
                    "x": "396",
                    "y": "613",
                    "width": "70",
                    "height": "69",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqE.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }, {
                    "name": "rfLwCtitle",
                    "type": "rflwd",
                    "x": "0",
                    "y": "600",
                    "width": "962",
                    "height": "114",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "C",
                    "fontSize": "70",
                    "text": "Not enough keys!",
                    "rfNvJ": "rfOsH",
                    "color": "#63391D",
                    "children": []
                }, {
                    "name": "rfLwCrfLwK",
                    "type": "rflwd",
                    "x": "-6",
                    "y": "476",
                    "width": "800",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "65",
                    "text": "Keys found:",
                    "rfNvJ": "rfOsH",
                    "color": "#D08019",
                    "children": []
                }, {
                    "name": "rfNxGrfKvD",
                    "type": "Image",
                    "x": "0",
                    "y": "156",
                    "width": "742",
                    "height": "582",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKyA.png",
                    "children": []
                }, {
                    "name": "rfNxGrfPxC",
                    "type": "Image",
                    "x": "0",
                    "y": "-241",
                    "width": "648",
                    "height": "246",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfPxA.png",
                    "children": []
                }, {
                    "name": "rfLwCrfLwH",
                    "type": "rflwd",
                    "x": "0",
                    "y": "-235",
                    "width": "600",
                    "height": "200",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "65",
                    "text": "FUUUUUUUU",
                    "rfNvJ": "rfOsH",
                    "color": "#D08019",
                    "children": []
                }, {
                    "name": "rfPyJback",
                    "type": "Button",
                    "x": "0",
                    "y": "-504",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqJ.png",
                    "rfNvC": "",
                    "rfJyD": "rfOqH.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCback",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "800",
                        "height": "300",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "continue",
                        "rfNvJ": "rfOsH",
                        "color": "#F8DF55",
                        "children": []
                    }]
                }]
            }]
        },
        "zfLtqhnr": {
            "name": "zfLtqhnr",
            "children": [{
                "name": "rfNrCrfOvJ",
                "type": "Group",
                "x": "0",
                "y": "-23",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfPxF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "962",
                    "height": "1362",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJwD.png",
                    "children": []
                }, {
                    "name": "rfPyJclose",
                    "type": "Button",
                    "x": "396",
                    "y": "613",
                    "width": "70",
                    "height": "69",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqE.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }, {
                    "name": "rfLwCtitle",
                    "type": "rflwd",
                    "x": "-55",
                    "y": "600",
                    "width": "962",
                    "height": "114",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "C",
                    "fontSize": "70",
                    "text": "Travel to the next world?",
                    "rfNvJ": "rfOsH",
                    "color": "#63391D",
                    "children": []
                }, {
                    "name": "rfNxGrfNrH",
                    "type": "Image",
                    "x": "0",
                    "y": "145",
                    "width": "794",
                    "height": "571",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKzK.png",
                    "children": []
                }, {
                    "name": "rfLwCrfJzE",
                    "type": "rflwd",
                    "x": "-6",
                    "y": "468",
                    "width": "800",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "65",
                    "text": "You require:",
                    "rfNvJ": "rfOsH",
                    "color": "#D08019",
                    "children": []
                }, {
                    "name": "rfNxGrfPxC",
                    "type": "Image",
                    "x": "0",
                    "y": "-241",
                    "width": "648",
                    "height": "246",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfPxA.png",
                    "children": []
                }, {
                    "name": "rfLwCrfLwG",
                    "type": "rflwd",
                    "x": "-6",
                    "y": "-235",
                    "width": "800",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "65",
                    "text": "You will spend:",
                    "rfNvJ": "rfOsH",
                    "color": "#D08019",
                    "children": []
                }, {
                    "name": "rfPyJback",
                    "type": "Button",
                    "x": "0",
                    "y": "-504",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqJ.png",
                    "rfNvC": "",
                    "rfJyD": "rfOqH.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCback",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "800",
                        "height": "300",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Pay",
                        "rfNvJ": "rfOsH",
                        "color": "#F8DF55",
                        "children": []
                    }]
                }]
            }]
        },
        "weOwqjkv": {
            "name": "weOwqjkv",
            "children": [{
                "name": "rfNrCrfOxD",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "400",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfKqE",
                    "type": "Image",
                    "x": "-93",
                    "y": "0",
                    "width": "98",
                    "height": "87",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIvC.png",
                    "children": []
                }, {
                    "name": "rfNxGrfKvG",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "98",
                    "height": "87",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIvC.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJzC",
                    "type": "Image",
                    "x": "93",
                    "y": "0",
                    "width": "98",
                    "height": "87",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIvC.png",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfNvE",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "400",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfKqD",
                    "type": "Image",
                    "x": "-93",
                    "y": "0",
                    "width": "82",
                    "height": "72",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIvD.png",
                    "children": []
                }, {
                    "name": "rfNxGrfKvF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "82",
                    "height": "72",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIvD.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJzB",
                    "type": "Image",
                    "x": "93",
                    "y": "0",
                    "width": "82",
                    "height": "72",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIvD.png",
                    "children": []
                }]
            }]
        },
        "ujPvqjkv": {
            "name": "ujPvqjkv",
            "children": [{
                "name": "rfNxGrfHyA1rdLv",
                "type": "Image",
                "x": "-77",
                "y": "0",
                "width": "76",
                "height": "133",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIvA.png",
                "children": []
            }, {
                "name": "rfNxGrfHyA2rdLv",
                "type": "Image",
                "x": "2",
                "y": "0",
                "width": "76",
                "height": "133",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIvA.png",
                "children": []
            }, {
                "name": "rfNxGrfHyA3rdLv",
                "type": "Image",
                "x": "80",
                "y": "0",
                "width": "76",
                "height": "133",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIvA.png",
                "children": []
            }, {
                "name": "rfNxGrfHyA1",
                "type": "Image",
                "x": "-77",
                "y": "0",
                "width": "61",
                "height": "117",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIvB.png",
                "children": []
            }, {
                "name": "rfNxGrfHyA2",
                "type": "Image",
                "x": "2",
                "y": "0",
                "width": "61",
                "height": "117",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIvB.png",
                "children": []
            }, {
                "name": "rfNxGrfHyA3",
                "type": "Image",
                "x": "80",
                "y": "0",
                "width": "61",
                "height": "117",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIvB.png",
                "children": []
            }]
        },
        "rfLuJ": {
            "name": "rfLuJ",
            "children": [{
                "name": "rfNrCrfKsA",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfKzH",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "888",
                    "height": "1049",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKzJ.png",
                    "children": []
                }, {
                    "name": "rfNxGrfKzG",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "888",
                    "height": "1049",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKzG.png",
                    "children": []
                }]
            }, {
                "name": "rfLwCrfKsC",
                "type": "rflwd",
                "x": "0",
                "y": "-487",
                "width": "500",
                "height": "200",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "C",
                "fontSize": "75",
                "text": "Loading",
                "rfNvJ": "rfOsH",
                "color": "#643A1E",
                "children": []
            }]
        },
        "wdNwqhnr": {
            "name": "wdNwqhnr",
            "children": [{
                "name": "rfNrCrfOvJ",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "800",
                "height": "300",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfPxF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "962",
                    "height": "1362",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJwD.png",
                    "children": []
                }, {
                    "name": "rfLwCrfNvG",
                    "type": "rflwd",
                    "x": "0",
                    "y": "600",
                    "width": "544",
                    "height": "127",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "C",
                    "fontSize": "85",
                    "text": "Level lost",
                    "rfNvJ": "rfOsH",
                    "color": "#63391D",
                    "children": []
                }, {
                    "name": "rfNrCrfNrK",
                    "type": "Group",
                    "x": "0",
                    "y": "215",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNxGrfKtG",
                        "type": "Image",
                        "x": "-2",
                        "y": "49.5",
                        "width": "425",
                        "height": "425",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKtG.png",
                        "children": []
                    }, {
                        "name": "rfNrCrfNqA",
                        "type": "Group",
                        "x": "0",
                        "y": "-196",
                        "width": "0",
                        "height": "0",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "children": [{
                            "name": "rfNxGrfItB",
                            "type": "Image",
                            "x": "0",
                            "y": "215",
                            "width": "806",
                            "height": "510",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfKzB.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfNqE",
                            "type": "Image",
                            "x": "0",
                            "y": "215",
                            "width": "748",
                            "height": "517",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfKzE.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfJsC",
                            "type": "Image",
                            "x": "0",
                            "y": "215",
                            "width": "762",
                            "height": "501",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfKzC.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfOuH",
                            "type": "Image",
                            "x": "0",
                            "y": "215",
                            "width": "806",
                            "height": "530",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfKzF.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfKsH",
                            "type": "Image",
                            "x": "0",
                            "y": "215",
                            "width": "806",
                            "height": "501",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfKzD.png",
                            "children": []
                        }]
                    }, {
                        "name": "rfLwCrfOuA",
                        "type": "rflwd",
                        "x": "140",
                        "y": "-130",
                        "width": "400",
                        "height": "150",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "A",
                        "fontSize": "65",
                        "text": "75/100",
                        "rfNvJ": "rfOsH",
                        "color": "#FFFFFF",
                        "children": []
                    }]
                }, {
                    "name": "rfNrCkeys",
                    "type": "Group",
                    "x": "0",
                    "y": "109",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNxGrfLvH",
                        "type": "Image",
                        "x": "0",
                        "y": "-236",
                        "width": "644",
                        "height": "165",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfPxC.png",
                        "children": []
                    }, {
                        "name": "rfLwCrfLwJ",
                        "type": "rflwd",
                        "x": "-89",
                        "y": "-241",
                        "width": "400",
                        "height": "145",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Keys found:",
                        "rfNvJ": "left",
                        "color": "#D08019",
                        "children": []
                    }, {
                        "name": "rfNxGrfPxH",
                        "type": "Image",
                        "x": "165",
                        "y": "-240",
                        "width": "240",
                        "height": "234",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfLvJ.png",
                        "children": []
                    }, {
                        "name": "rfNrCrfLvC",
                        "type": "Group",
                        "x": "0",
                        "y": "12",
                        "width": "0",
                        "height": "0",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "children": [{
                            "name": "rfNxGrfHyA1",
                            "type": "Image",
                            "x": "115",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvE.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA2",
                            "type": "Image",
                            "x": "165",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvE.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA3",
                            "type": "Image",
                            "x": "215",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvE.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA1rdLv",
                            "type": "Image",
                            "x": "115",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvF.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA2rdLv",
                            "type": "Image",
                            "x": "165",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvF.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA3rdLv",
                            "type": "Image",
                            "x": "215",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvF.png",
                            "children": []
                        }]
                    }]
                }, {
                    "name": "rfPyJrfJzD",
                    "type": "Button",
                    "x": "0",
                    "y": "-326",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqJ.png",
                    "rfNvC": "",
                    "rfJyD": "rfOqH.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCrfNrE",
                        "type": "rflwd",
                        "x": "0",
                        "y": "6",
                        "width": "362",
                        "height": "108",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Retry",
                        "rfNvJ": "rfOsH",
                        "color": "#F8DF55",
                        "children": []
                    }]
                }, {
                    "name": "rfPyJmap",
                    "type": "Button",
                    "x": "0",
                    "y": "-518",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqG.png",
                    "rfNvC": "",
                    "rfJyD": "rfOqF.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCrfJwG",
                        "type": "rflwd",
                        "x": "0",
                        "y": "6",
                        "width": "605",
                        "height": "112",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Back to map",
                        "rfNvJ": "rfOsH",
                        "color": "#63391D",
                        "children": []
                    }]
                }]
            }]
        },
        "wdNyqjkv": {
            "name": "wdNyqjkv",
            "children": [{
                "name": "rfNxGrfPxG",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "327",
                "height": "338",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfPxG.png",
                "children": []
            }, {
                "name": "rfNrCrfOsF",
                "type": "Group",
                "x": "0",
                "y": "12.2",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGrfOsFrdKy",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "189",
                    "height": "239",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwG.png",
                    "children": []
                }, {
                    "name": "rfPyJrfOsF",
                    "type": "Button",
                    "x": "0",
                    "y": "0",
                    "width": "116",
                    "height": "167",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwJ.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }, {
                    "name": "rfNxGrfOsFrdKz",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "116",
                    "height": "167",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwH.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOsFrdJs1",
                    "type": "Image",
                    "x": "-31.4",
                    "y": "-57.29999",
                    "width": "16",
                    "height": "30",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLvG.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOsFrdJs2",
                    "type": "Image",
                    "x": "0.4",
                    "y": "-57.29999",
                    "width": "16",
                    "height": "30",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLvG.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOsFrdJs3",
                    "type": "Image",
                    "x": "32.1",
                    "y": "-57.29999",
                    "width": "16",
                    "height": "30",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLvG.png",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfOzG",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfOzGrdKy",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "204",
                    "height": "217",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwD.png",
                    "children": []
                }, {
                    "name": "rfPyJrfOzG",
                    "type": "Button",
                    "x": "0",
                    "y": "0",
                    "width": "134",
                    "height": "144",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwF.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }, {
                    "name": "rfNxGrfOzGrdKz",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "134",
                    "height": "144",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwE.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOzGrdJs3",
                    "type": "Image",
                    "x": "32.1",
                    "y": "-45.9",
                    "width": "16",
                    "height": "29",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLvD.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOzGrdJs2",
                    "type": "Image",
                    "x": "0.4000001",
                    "y": "-45.9",
                    "width": "16",
                    "height": "29",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLvD.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOzGrdJs1",
                    "type": "Image",
                    "x": "-31.4",
                    "y": "-45.9",
                    "width": "16",
                    "height": "29",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLvD.png",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfJrB",
                "type": "Group",
                "x": "0",
                "y": "-4",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGrfJrBrdKy",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "192",
                    "height": "210",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwA.png",
                    "children": []
                }, {
                    "name": "rfPyJrfJrB",
                    "type": "Button",
                    "x": "0",
                    "y": "0",
                    "width": "118",
                    "height": "136",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwC.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }, {
                    "name": "rfNxGrfJrBrdKz",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "118",
                    "height": "136",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrBrdJs1",
                    "type": "Image",
                    "x": "-31.4",
                    "y": "-41.9",
                    "width": "16",
                    "height": "30",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLvB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrBrdJs2",
                    "type": "Image",
                    "x": "0.4000001",
                    "y": "-41.9",
                    "width": "16",
                    "height": "30",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLvB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfJrBrdJs3",
                    "type": "Image",
                    "x": "32.1",
                    "y": "-41.9",
                    "width": "16",
                    "height": "30",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLvB.png",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfItA",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGrfItArdKy",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "187",
                    "height": "215",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKxH.png",
                    "children": []
                }, {
                    "name": "rfPyJrfItA",
                    "type": "Button",
                    "x": "0",
                    "y": "0",
                    "width": "113",
                    "height": "143",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKxK.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }, {
                    "name": "rfNxGrfItArdKz",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "113",
                    "height": "143",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKxJ.png",
                    "children": []
                }, {
                    "name": "rfNxGrfItArdJs3",
                    "type": "Image",
                    "x": "32.1",
                    "y": "-45.9",
                    "width": "16",
                    "height": "30",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLwF.png",
                    "children": []
                }, {
                    "name": "rfNxGrfItArdJs2",
                    "type": "Image",
                    "x": "0.4000001",
                    "y": "-45.9",
                    "width": "16",
                    "height": "30",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLwF.png",
                    "children": []
                }, {
                    "name": "rfNxGrfItArdJs1",
                    "type": "Image",
                    "x": "-31.4",
                    "y": "-45.9",
                    "width": "16",
                    "height": "30",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfLwF.png",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfKtH",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfPyJrfKtH",
                    "type": "Button",
                    "x": "0",
                    "y": "0",
                    "width": "204",
                    "height": "221",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKtH.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }, {
                    "name": "rfLwCrfKtH",
                    "type": "rflwd",
                    "x": "8.5",
                    "y": "-67.8",
                    "width": "200",
                    "height": "80",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "A",
                    "fontSize": "35",
                    "text": "123456",
                    "rfNvJ": "rfOsH",
                    "color": "#0F7C82",
                    "children": []
                }]
            }, {
                "name": "rfLwCrfKqA",
                "type": "rflwd",
                "x": "0",
                "y": "56.7",
                "width": "300",
                "height": "150",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "65",
                "text": "8",
                "rfNvJ": "rfOsH",
                "color": "#FFFFFF",
                "children": []
            }]
        },
        "riLyHqjkv": {
            "name": "riLyHqjkv",
            "children": [{
                "name": "rfNxGrfOzGrijv",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "76",
                "height": "78",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwE.png",
                "children": []
            }, {
                "name": "rfNxGtimerijv",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "83",
                "height": "96",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwD.png",
                "children": []
            }, {
                "name": "rfNxGrfOsFrijv",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "103",
                "height": "122",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwF.png",
                "children": []
            }, {
                "name": "rfNxGrfJrBrijv",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "102",
                "height": "102",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwH.png",
                "children": []
            }, {
                "name": "rfNxGrfJsE",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "432",
                "height": "128",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwA.png",
                "children": []
            }, {
                "name": "rfNxGrfOuJ",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "432",
                "height": "128",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwC.png",
                "children": []
            }, {
                "name": "rfNxGrfItC",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "432",
                "height": "128",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIxK.png",
                "children": []
            }, {
                "name": "rfNxGrfNqF",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "432",
                "height": "128",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwB.png",
                "children": []
            }]
        },
        "ycLqqhnr": {
            "name": "ycLqqhnr",
            "children": [{
                "name": "rfNrCrfOvJ",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNrCrfKxF",
                    "type": "Group",
                    "x": "0",
                    "y": "69",
                    "width": "704",
                    "height": "381",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfJtGrfLuH",
                        "type": "rfjwf",
                        "x": "0",
                        "y": "0",
                        "width": "704",
                        "height": "381",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfJwC.png",
                        "children": []
                    }, {
                        "name": "rfJtGrfKyJ",
                        "type": "rfjwf",
                        "x": "1712",
                        "y": "0",
                        "width": "704",
                        "height": "381",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfJwC.png",
                        "children": []
                    }]
                }, {
                    "name": "rfNxGrfPxF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "962",
                    "height": "1362",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJwD.png",
                    "children": []
                }, {
                    "name": "rfPyJclose",
                    "type": "Button",
                    "x": "396.1",
                    "y": "612.6",
                    "width": "70",
                    "height": "69",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqE.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }, {
                    "name": "rfLwCtitle",
                    "type": "rflwd",
                    "x": "-79",
                    "y": "600",
                    "width": "500",
                    "height": "150",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "C",
                    "fontSize": "85",
                    "text": "Level",
                    "rfNvJ": "rfOsH",
                    "color": "#643A1E",
                    "children": []
                }, {
                    "name": "rfLwCrfKqA",
                    "type": "rflwd",
                    "x": "135",
                    "y": "608",
                    "width": "500",
                    "height": "150",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "A",
                    "fontSize": "109",
                    "text": "999\n",
                    "rfNvJ": "rfOsH",
                    "color": "#643A1E",
                    "children": []
                }, {
                    "name": "rfPyJrfIsA",
                    "type": "Button",
                    "x": "0",
                    "y": "-528",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqJ.png",
                    "rfNvC": "",
                    "rfJyD": "rfOqH.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCrfIsA",
                        "type": "rflwd",
                        "x": "-5.722E-06",
                        "y": "-1.549721E-06",
                        "width": "762",
                        "height": "162",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Start",
                        "rfNvJ": "rfOsH",
                        "color": "#F9E055",
                        "children": []
                    }]
                }, {
                    "name": "rfNrCrfKxE",
                    "type": "Group",
                    "x": "0",
                    "y": "309",
                    "width": "648",
                    "height": "441",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNrCrfKxD",
                        "type": "Group",
                        "x": "0",
                        "y": "-31",
                        "width": "485",
                        "height": "362",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "children": [{
                            "name": "rfNxGrfItG",
                            "type": "Image",
                            "x": "0",
                            "y": "-20",
                            "width": "806",
                            "height": "501",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJqD.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfItH",
                            "type": "Image",
                            "x": "0",
                            "y": "-20",
                            "width": "806",
                            "height": "505",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJqE.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfItJ",
                            "type": "Image",
                            "x": "0",
                            "y": "-20",
                            "width": "806",
                            "height": "490",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJqF.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfItK",
                            "type": "Image",
                            "x": "0",
                            "y": "-20",
                            "width": "806",
                            "height": "526",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJqG.png",
                            "children": []
                        }]
                    }, {
                        "name": "rfLwCrfIyH",
                        "type": "rflwd",
                        "x": "153",
                        "y": "-159",
                        "width": "229",
                        "height": "72",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "A",
                        "fontSize": "60",
                        "text": "100:100",
                        "rfNvJ": "rfOsH",
                        "color": "#FFFFFF",
                        "children": []
                    }]
                }, {
                    "name": "rfNrCrfKxC",
                    "type": "Group",
                    "x": "0",
                    "y": "501",
                    "width": "648",
                    "height": "94.5",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfLwCrfIuA",
                        "type": "rflwd",
                        "x": "0.02",
                        "y": "0.01",
                        "width": "647.99",
                        "height": "94.46",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "55",
                        "text": "Collect pellets!",
                        "rfNvJ": "rfOsH",
                        "color": "#D08019",
                        "children": []
                    }, {
                        "name": "rfLwCrfIuB",
                        "type": "rflwd",
                        "x": "0.02",
                        "y": "0.01",
                        "width": "647.99",
                        "height": "94.46",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "55",
                        "text": "Defeat the ghosts!",
                        "rfNvJ": "rfOsH",
                        "color": "#D08019",
                        "children": []
                    }, {
                        "name": "rfLwCrfIuC",
                        "type": "rflwd",
                        "x": "0.02",
                        "y": "0.01",
                        "width": "647.99",
                        "height": "94.46",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "55",
                        "text": "Collect cherries!",
                        "rfNvJ": "rfOsH",
                        "color": "#D08019",
                        "children": []
                    }, {
                        "name": "rfLwCrfIvK",
                        "type": "rflwd",
                        "x": "0.02",
                        "y": "0.01",
                        "width": "647.99",
                        "height": "94.46",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "55",
                        "text": "Race to the finish!",
                        "rfNvJ": "rfOsH",
                        "color": "#D08019",
                        "children": []
                    }]
                }, {
                    "name": "rfNrCrfJxF",
                    "type": "Group",
                    "x": "0",
                    "y": "-225",
                    "width": "857",
                    "height": "414",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNrCrfJyE",
                        "type": "Group",
                        "x": "0",
                        "y": "0",
                        "width": "857",
                        "height": "414",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "children": [{
                            "name": "rfJtGrfLtErjkvc",
                            "type": "rfjwf",
                            "x": "-324",
                            "y": "92",
                            "width": "149",
                            "height": "149",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfjxe.png",
                            "children": []
                        }, {
                            "name": "rfJtGrfIrCrjkvc",
                            "type": "rfjwf",
                            "x": "-108",
                            "y": "92",
                            "width": "149",
                            "height": "149",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfjxe.png",
                            "children": []
                        }, {
                            "name": "rfJtGrfKtErjkvc",
                            "type": "rfjwf",
                            "x": "108",
                            "y": "92",
                            "width": "149",
                            "height": "149",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfjxe.png",
                            "children": []
                        }, {
                            "name": "rfJtGrfKrCrjkvc",
                            "type": "rfjwf",
                            "x": "324",
                            "y": "92",
                            "width": "149",
                            "height": "149",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfjxe.png",
                            "children": []
                        }]
                    }, {
                        "name": "rfNrCrfJxJ",
                        "type": "Group",
                        "x": "0",
                        "y": "0",
                        "width": "857",
                        "height": "414",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "children": [{
                            "name": "rfJtGrfLtErintb",
                            "type": "rfjwf",
                            "x": "-324",
                            "y": "-106",
                            "width": "149",
                            "height": "149",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfjxe.png",
                            "children": []
                        }, {
                            "name": "rfJtGrfIrCrintb",
                            "type": "rfjwf",
                            "x": "-108",
                            "y": "-106",
                            "width": "149",
                            "height": "149",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfjxe.png",
                            "children": []
                        }, {
                            "name": "rfJtGrfKtErintb",
                            "type": "rfjwf",
                            "x": "108",
                            "y": "-106",
                            "width": "149",
                            "height": "149",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfjxe.png",
                            "children": []
                        }, {
                            "name": "rfJtGrfKrCrintb",
                            "type": "rfjwf",
                            "x": "324",
                            "y": "-106",
                            "width": "149",
                            "height": "149",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfjxe.png",
                            "children": []
                        }]
                    }]
                }, {
                    "name": "rfNrCrfJyF",
                    "type": "Group",
                    "x": "0",
                    "y": "-225",
                    "width": "857",
                    "height": "414",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNxGrfJxD",
                        "type": "Image",
                        "x": "-324",
                        "y": "92",
                        "width": "149",
                        "height": "149",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfjxe.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJxC",
                        "type": "Image",
                        "x": "-108",
                        "y": "92",
                        "width": "149",
                        "height": "149",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfjxe.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJxB",
                        "type": "Image",
                        "x": "108",
                        "y": "92",
                        "width": "149",
                        "height": "149",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfjxe.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJxA",
                        "type": "Image",
                        "x": "324",
                        "y": "92",
                        "width": "149",
                        "height": "149",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfjxe.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJyK",
                        "type": "Image",
                        "x": "-324",
                        "y": "-106",
                        "width": "149",
                        "height": "149",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfjxe.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJyJ",
                        "type": "Image",
                        "x": "-108",
                        "y": "-106",
                        "width": "149",
                        "height": "149",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfjxe.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJyH",
                        "type": "Image",
                        "x": "108",
                        "y": "-106",
                        "width": "149",
                        "height": "149",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfjxe.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJyG",
                        "type": "Image",
                        "x": "324",
                        "y": "-106",
                        "width": "149",
                        "height": "149",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfjxe.png",
                        "children": []
                    }]
                }, {
                    "name": "rfNrCrfJxH",
                    "type": "Group",
                    "x": "-3.051758E-05",
                    "y": "-225",
                    "width": "857",
                    "height": "414",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfPyJrfLtE",
                        "type": "Button",
                        "x": "-323.9",
                        "y": "92",
                        "width": "161",
                        "height": "160",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfOrB.png",
                        "rfNvC": "",
                        "rfJyD": "",
                        "rfOxE": "",
                        "children": [{
                            "name": "rfLwCrfLtErjlw",
                            "type": "rflwd",
                            "x": "23.3",
                            "y": "-36.4",
                            "width": "102.1",
                            "height": "40.4",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "rfOyJ": "B",
                            "fontSize": "30",
                            "text": "123456",
                            "rfNvJ": "rfOsH",
                            "color": "#00FFFF",
                            "children": []
                        }, {
                            "name": "rfNxGrfLtA",
                            "type": "Image",
                            "x": "-47.4",
                            "y": "-35.65",
                            "width": "47",
                            "height": "47",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJsD.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfLtE",
                            "type": "Image",
                            "x": "0",
                            "y": "23.9",
                            "width": "101",
                            "height": "76",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfNwD.png",
                            "children": []
                        }]
                    }, {
                        "name": "rfPyJrfIrC",
                        "type": "Button",
                        "x": "-107.3",
                        "y": "92",
                        "width": "161",
                        "height": "160",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfOrA.png",
                        "rfNvC": "",
                        "rfJyD": "",
                        "rfOxE": "",
                        "children": [{
                            "name": "rfLwCrfIrCrjlw",
                            "type": "rflwd",
                            "x": "23.3",
                            "y": "-36.4",
                            "width": "102.1",
                            "height": "40.4",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "rfOyJ": "B",
                            "fontSize": "30",
                            "text": "123456",
                            "rfNvJ": "rfOsH",
                            "color": "#F0C4FF",
                            "children": []
                        }, {
                            "name": "rfNxGrfIsJ",
                            "type": "Image",
                            "x": "-47.4",
                            "y": "-35.65",
                            "width": "47",
                            "height": "47",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJsD.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfIrC",
                            "type": "Image",
                            "x": "0",
                            "y": "23.9",
                            "width": "91",
                            "height": "75",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfNwA.png",
                            "children": []
                        }]
                    }, {
                        "name": "rfPyJrfKtE",
                        "type": "Button",
                        "x": "108.5",
                        "y": "92",
                        "width": "161",
                        "height": "160",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfOsK.png",
                        "rfNvC": "",
                        "rfJyD": "",
                        "rfOxE": "",
                        "children": [{
                            "name": "rfLwCrfKtErjlw",
                            "type": "rflwd",
                            "x": "23.3",
                            "y": "-36.4",
                            "width": "102.1",
                            "height": "40.4",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "rfOyJ": "B",
                            "fontSize": "30",
                            "text": "123456",
                            "rfNvJ": "rfOsH",
                            "color": "#FF6B85",
                            "children": []
                        }, {
                            "name": "rfNxGrfKtA",
                            "type": "Image",
                            "x": "-47.4",
                            "y": "-35.65",
                            "width": "47",
                            "height": "47",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJsD.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfKtE",
                            "type": "Image",
                            "x": "0",
                            "y": "23.9",
                            "width": "105",
                            "height": "79",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfNwH.png",
                            "children": []
                        }]
                    }, {
                        "name": "rfPyJrfKrC",
                        "type": "Button",
                        "x": "324.3",
                        "y": "92",
                        "width": "161",
                        "height": "160",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfOrC.png",
                        "rfNvC": "",
                        "rfJyD": "",
                        "rfOxE": "",
                        "children": [{
                            "name": "rfLwCrfKrCrjlw",
                            "type": "rflwd",
                            "x": "23.3",
                            "y": "-36.4",
                            "width": "102.1",
                            "height": "40.4",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "rfOyJ": "B",
                            "fontSize": "30",
                            "text": "123456",
                            "rfNvJ": "rfOsH",
                            "color": "#FF6983",
                            "children": []
                        }, {
                            "name": "rfNxGrfKsJ",
                            "type": "Image",
                            "x": "-47.4",
                            "y": "-35.65",
                            "width": "47",
                            "height": "47",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJsD.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfKrC",
                            "type": "Image",
                            "x": "0",
                            "y": "23.9",
                            "width": "104",
                            "height": "70",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfNwK.png",
                            "children": []
                        }]
                    }]
                }, {
                    "name": "rfNrCrfJxG",
                    "type": "Group",
                    "x": "-3.051758E-05",
                    "y": "-225",
                    "width": "857",
                    "height": "414",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNxGrfLtEvimz",
                        "type": "Image",
                        "x": "-323.9",
                        "y": "92",
                        "width": "160",
                        "height": "159",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfNwC.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfIrCvimz",
                        "type": "Image",
                        "x": "-107.1",
                        "y": "92",
                        "width": "160",
                        "height": "159",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfNxK.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfKtEvimz",
                        "type": "Image",
                        "x": "108.5",
                        "y": "92",
                        "width": "160",
                        "height": "159",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfNwG.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfKrCvimz",
                        "type": "Image",
                        "x": "324.8",
                        "y": "92",
                        "width": "160",
                        "height": "159",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfNwJ.png",
                        "children": []
                    }]
                }, {
                    "name": "rfLwCrfIrD",
                    "type": "rflwd",
                    "x": "0.005004883",
                    "y": "0",
                    "width": "647.99",
                    "height": "90",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "55",
                    "text": "Select a powerup:",
                    "rfNvJ": "rfOsH",
                    "color": "#D08019",
                    "children": []
                }]
            }]
        },
        "vfLqqhnr": {
            "name": "vfLqqhnr",
            "children": [{
                "name": "rfNrCrfOvJ",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "800",
                "height": "300",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfPxF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "962",
                    "height": "1362",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJwD.png",
                    "children": []
                }, {
                    "name": "rfNrCrfNrK",
                    "type": "Group",
                    "x": "0",
                    "y": "279",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNrCrfNqA",
                        "type": "Group",
                        "x": "0",
                        "y": "-196",
                        "width": "0",
                        "height": "0",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "children": [{
                            "name": "rfNxGrfIuE",
                            "type": "Image",
                            "x": "0",
                            "y": "215",
                            "width": "789",
                            "height": "586",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJrK.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfNqC",
                            "type": "Image",
                            "x": "0",
                            "y": "215",
                            "width": "794",
                            "height": "563",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJqB.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfJtH",
                            "type": "Image",
                            "x": "0",
                            "y": "215",
                            "width": "808",
                            "height": "569",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJqA.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfOuG",
                            "type": "Image",
                            "x": "0",
                            "y": "215",
                            "width": "790",
                            "height": "568",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfJqC.png",
                            "children": []
                        }]
                    }]
                }, {
                    "name": "rfLwCrfIyJ",
                    "type": "rflwd",
                    "x": "0",
                    "y": "600",
                    "width": "600",
                    "height": "127",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "C",
                    "fontSize": "85",
                    "text": "Level won!",
                    "rfNvJ": "rfOsH",
                    "color": "#63391D",
                    "children": []
                }, {
                    "name": "rfNrCrfJsA",
                    "type": "Group",
                    "x": "0",
                    "y": "-7",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNxGrfJtK",
                        "type": "Image",
                        "x": "0",
                        "y": "0.8000031",
                        "width": "644",
                        "height": "127",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfPxB.png",
                        "children": []
                    }, {
                        "name": "rfLwCrfJtJ",
                        "type": "rflwd",
                        "x": "-89",
                        "y": "7",
                        "width": "400",
                        "height": "145",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "60",
                        "text": "Pellets:",
                        "rfNvJ": "left",
                        "color": "#D08019",
                        "children": []
                    }, {
                        "name": "rfLwCrfJsA",
                        "type": "rflwd",
                        "x": "183",
                        "y": "7",
                        "width": "237",
                        "height": "95",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "A",
                        "fontSize": "65",
                        "text": "123456",
                        "rfNvJ": "rfOsH",
                        "color": "#D08019",
                        "children": []
                    }, {
                        "name": "rfNxGrfozk",
                        "type": "Image",
                        "x": "54",
                        "y": "9",
                        "width": "47",
                        "height": "47",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfJsD.png",
                        "children": []
                    }]
                }, {
                    "name": "rfNrCrfIrJ",
                    "type": "Group",
                    "x": "0",
                    "y": "-158",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNxGrfIrH",
                        "type": "Image",
                        "x": "0",
                        "y": "0.8000031",
                        "width": "644",
                        "height": "127",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfPxB.png",
                        "children": []
                    }, {
                        "name": "rfLwCrfIrF",
                        "type": "rflwd",
                        "x": "-89",
                        "y": "3",
                        "width": "400",
                        "height": "145",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "60",
                        "text": "Score:",
                        "rfNvJ": "left",
                        "color": "#0ACA6E",
                        "children": []
                    }, {
                        "name": "rfLwCrfIrJ",
                        "type": "rflwd",
                        "x": "183",
                        "y": "3",
                        "width": "237",
                        "height": "95",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "A",
                        "fontSize": "65",
                        "text": "123456",
                        "rfNvJ": "rfOsH",
                        "color": "#0ACB6E",
                        "children": []
                    }]
                }, {
                    "name": "rfNrCkeys",
                    "type": "Group",
                    "x": "0",
                    "y": "-70",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNxGrfLvH",
                        "type": "Image",
                        "x": "0",
                        "y": "-236",
                        "width": "644",
                        "height": "127",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfPxB.png",
                        "children": []
                    }, {
                        "name": "rfLwCrfLwJ",
                        "type": "rflwd",
                        "x": "-89",
                        "y": "-241",
                        "width": "400",
                        "height": "145",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "60",
                        "text": "Keys found:",
                        "rfNvJ": "left",
                        "color": "#CC6C05",
                        "children": []
                    }, {
                        "name": "rfNxGrfPxH",
                        "type": "rfisb",
                        "x": "195.4",
                        "y": "-236",
                        "width": "240",
                        "height": "234",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfLvJ.png",
                        "children": []
                    }, {
                        "name": "rfNrCrfLvC",
                        "type": "Group",
                        "x": "24",
                        "y": "7",
                        "width": "0",
                        "height": "0",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "children": [{
                            "name": "rfNxGrfHyA1",
                            "type": "Image",
                            "x": "115",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvE.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA2",
                            "type": "Image",
                            "x": "165",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvE.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA3",
                            "type": "Image",
                            "x": "215",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvE.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA1rdLv",
                            "type": "Image",
                            "x": "115",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvF.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA2rdLv",
                            "type": "Image",
                            "x": "165",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvF.png",
                            "children": []
                        }, {
                            "name": "rfNxGrfHyA3rdLv",
                            "type": "Image",
                            "x": "215",
                            "y": "-246",
                            "width": "55",
                            "height": "92",
                            "rfPwF": "0.5",
                            "rfPwE": "0.5",
                            "rfIqA": "1",
                            "rfIrK": "1",
                            "rfIqD": "0",
                            "rfIxE": "true",
                            "image": "rfLvF.png",
                            "children": []
                        }]
                    }]
                }, {
                    "name": "rfPyJmap",
                    "type": "Button",
                    "x": "-226",
                    "y": "-507",
                    "width": "209",
                    "height": "202",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOrE.png",
                    "rfNvC": "",
                    "rfJyD": "rfOrD.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfNxGmap",
                        "type": "Image",
                        "x": "-2.899994",
                        "y": "5",
                        "width": "121",
                        "height": "97",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfNwF.png",
                        "children": []
                    }]
                }, {
                    "name": "rfPyJrfJzD",
                    "type": "Button",
                    "x": "4.9",
                    "y": "-507",
                    "width": "209",
                    "height": "202",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOrG.png",
                    "rfNvC": "",
                    "rfJyD": "rfOrF.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfNxGrfJzD",
                        "type": "Image",
                        "x": "-4.900002",
                        "y": "5",
                        "width": "128",
                        "height": "107",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfNwB.png",
                        "children": []
                    }]
                }, {
                    "name": "rfPyJrfKvC",
                    "type": "Button",
                    "x": "232",
                    "y": "-507",
                    "width": "209",
                    "height": "202",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOrJ.png",
                    "rfNvC": "",
                    "rfJyD": "rfOrH.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfNxGrfKvC",
                        "type": "Image",
                        "x": "9.699982",
                        "y": "5",
                        "width": "81",
                        "height": "107",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfNwE.png",
                        "children": []
                    }]
                }]
            }]
        },
        "rfKsE": {
            "name": "rfKsE",
            "children": [{
                "name": "rfNxGbackground",
                "type": "Image",
                "x": "0",
                "y": "0",
                "width": "2160",
                "height": "1920",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfPxF.jpg",
                "children": []
            }, {
                "name": "rfNxGrfPxJ",
                "type": "Image",
                "x": "0",
                "y": "-685",
                "width": "207",
                "height": "89",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIsE.png",
                "children": []
            }, {
                "name": "rfNrCrfJyB",
                "type": "Group",
                "x": "0",
                "y": "-488",
                "width": "100",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfPyJrfIsA",
                    "type": "Button",
                    "x": "0",
                    "y": "0",
                    "width": "382",
                    "height": "191",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "false",
                    "image": "rfOqA.png",
                    "rfNvC": "",
                    "rfJyD": "rfOrK.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCplay",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "810",
                        "height": "540",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "C",
                        "fontSize": "90",
                        "text": "play",
                        "rfNvJ": "rfOsH",
                        "color": "#F8DF55",
                        "children": []
                    }]
                }, {
                    "name": "rfNxGrfKsC",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "381",
                    "height": "200",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKsC.png",
                    "children": []
                }, {
                    "name": "rfNrCrfJzA",
                    "type": "Group",
                    "x": "0",
                    "y": "0",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfJtGrfIxD",
                        "type": "rfjwf",
                        "x": "-190.5",
                        "y": "100",
                        "width": "0",
                        "height": "0",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "",
                        "children": []
                    }, {
                        "name": "rfJtGrfIxD (1)",
                        "type": "rfjwf",
                        "x": "190.5",
                        "y": "100",
                        "width": "0",
                        "height": "0",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "",
                        "children": []
                    }, {
                        "name": "rfJtGrfIxD (2)",
                        "type": "rfjwf",
                        "x": "190.5",
                        "y": "-100",
                        "width": "0",
                        "height": "0",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "",
                        "children": []
                    }, {
                        "name": "rfJtGrfIxD (3)",
                        "type": "rfjwf",
                        "x": "-190.5",
                        "y": "-100",
                        "width": "0",
                        "height": "0",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "",
                        "children": []
                    }, {
                        "name": "rfJtGrfIxD (4)",
                        "type": "rfjwf",
                        "x": "-190.5",
                        "y": "52",
                        "width": "0",
                        "height": "0",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "",
                        "children": []
                    }]
                }, {
                    "name": "rfNrCrfJsA",
                    "type": "Group",
                    "x": "0",
                    "y": "0",
                    "width": "0",
                    "height": "0",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "children": [{
                        "name": "rfNxGrfJrB",
                        "type": "Image",
                        "x": "-130",
                        "y": "100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (1)",
                        "type": "Image",
                        "x": "-80",
                        "y": "100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (2)",
                        "type": "Image",
                        "x": "-30",
                        "y": "100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (3)",
                        "type": "Image",
                        "x": "20",
                        "y": "100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (4)",
                        "type": "Image",
                        "x": "70",
                        "y": "100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (5)",
                        "type": "Image",
                        "x": "120",
                        "y": "100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (6)",
                        "type": "Image",
                        "x": "170",
                        "y": "100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (7)",
                        "type": "Image",
                        "x": "190.5",
                        "y": "70",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (8)",
                        "type": "Image",
                        "x": "190.5",
                        "y": "20",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (9)",
                        "type": "Image",
                        "x": "190.5",
                        "y": "-30",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (10)",
                        "type": "Image",
                        "x": "190.5",
                        "y": "-80",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (11)",
                        "type": "Image",
                        "x": "160",
                        "y": "-100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (12)",
                        "type": "Image",
                        "x": "110",
                        "y": "-100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (13)",
                        "type": "Image",
                        "x": "60",
                        "y": "-100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (14)",
                        "type": "Image",
                        "x": "10",
                        "y": "-100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (15)",
                        "type": "Image",
                        "x": "-40",
                        "y": "-100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (16)",
                        "type": "Image",
                        "x": "-90",
                        "y": "-100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (17)",
                        "type": "Image",
                        "x": "-140",
                        "y": "-100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (18)",
                        "type": "Image",
                        "x": "-190",
                        "y": "-100",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (19)",
                        "type": "Image",
                        "x": "-190",
                        "y": "-50",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (20)",
                        "type": "Image",
                        "x": "-190",
                        "y": "0",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }, {
                        "name": "rfNxGrfJrB (21)",
                        "type": "Image",
                        "x": "-190",
                        "y": "50",
                        "width": "14",
                        "height": "13",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "image": "rfKsB.png",
                        "children": []
                    }]
                }, {
                    "name": "rfNxGrfKyH",
                    "type": "Image",
                    "x": "-190.5",
                    "y": "100",
                    "width": "70",
                    "height": "34",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKtK.png",
                    "children": []
                }, {
                    "name": "rfNxGrfKyG",
                    "type": "Image",
                    "x": "-190.5",
                    "y": "100",
                    "width": "80",
                    "height": "34",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKtJ.png",
                    "children": []
                }]
            }, {
                "name": "rfNxGrfOvG",
                "type": "Image",
                "x": "0",
                "y": "-771.6",
                "width": "470",
                "height": "21",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIsF.png",
                "children": []
            }, {
                "name": "rfPyJrfOyE",
                "type": "Button",
                "x": "-15",
                "y": "15",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "1",
                "rfPwE": "0",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfOqC.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }, {
                "name": "rfPyJrfOyF",
                "type": "Button",
                "x": "-15",
                "y": "15",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "1",
                "rfPwE": "0",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfOqD.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }]
        },
        "map": {
            "name": "map",
            "children": [{
                "name": "rfNrCrfPxK",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "2160",
                "height": "1620",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfKuC",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "2160",
                    "height": "1745",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKuH.jpg",
                    "children": []
                }, {
                    "name": "rfNxGrfKuB",
                    "type": "Image",
                    "x": "0",
                    "y": "1741",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "2160",
                    "height": "1745",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKuG.jpg",
                    "children": []
                }, {
                    "name": "rfNxGrfKuA",
                    "type": "Image",
                    "x": "0",
                    "y": "3482",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "2160",
                    "height": "1745",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKuF.jpg",
                    "children": []
                }, {
                    "name": "rfNxGrfKvK",
                    "type": "Image",
                    "x": "0",
                    "y": "5223",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "2160",
                    "height": "1745",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKuE.jpg",
                    "children": []
                }, {
                    "name": "rfNxGrfKvJ",
                    "type": "Image",
                    "x": "0",
                    "y": "6964",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "2160",
                    "height": "1741",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKuD.jpg",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfOxG",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "2160",
                "height": "1620",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfOtE",
                    "type": "Image",
                    "x": "657",
                    "y": "1844",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "136",
                    "height": "171",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOsE.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOtD",
                    "type": "Image",
                    "x": "891",
                    "y": "3437",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "149",
                    "height": "149",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOsD.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOtC",
                    "type": "Image",
                    "x": "780",
                    "y": "3612",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "136",
                    "height": "161",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOsC.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOtA",
                    "type": "Image",
                    "x": "-343",
                    "y": "5470",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "135",
                    "height": "172",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOsA.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOtB",
                    "type": "Image",
                    "x": "-456",
                    "y": "5437",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "149",
                    "height": "149",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOsB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOwE",
                    "type": "Image",
                    "x": "897.5",
                    "y": "241",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "177",
                    "height": "165",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOvC.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOwD",
                    "type": "Image",
                    "x": "535",
                    "y": "748",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "257",
                    "height": "220",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOvB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOwC",
                    "type": "Image",
                    "x": "657",
                    "y": "998",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "170",
                    "height": "142",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOvA.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOwB",
                    "type": "Image",
                    "x": "-785",
                    "y": "320",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "212",
                    "height": "197",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOwK.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOwA",
                    "type": "Image",
                    "x": "-1040",
                    "y": "747",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "268",
                    "height": "221",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOwJ.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOxK",
                    "type": "Image",
                    "x": "-387",
                    "y": "1216",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "165",
                    "height": "163",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOwH.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOxJ",
                    "type": "Image",
                    "x": "-466.5",
                    "y": "1421",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "112",
                    "height": "115",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOwG.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOxH",
                    "type": "Image",
                    "x": "-809",
                    "y": "1640",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "112",
                    "height": "115",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOwF.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIyE",
                    "type": "Image",
                    "x": "1034",
                    "y": "2097",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "372",
                    "height": "194",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIyE.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIyD",
                    "type": "Image",
                    "x": "-859",
                    "y": "2269",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "287",
                    "height": "150",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIyD.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIyC",
                    "type": "Image",
                    "x": "552.5",
                    "y": "2432",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "222",
                    "height": "452",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIyC.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIyB",
                    "type": "Image",
                    "x": "1048.5",
                    "y": "2695",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "172",
                    "height": "101",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIyB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIyA",
                    "type": "Image",
                    "x": "901",
                    "y": "3050",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "134",
                    "height": "302",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIyA.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzK",
                    "type": "Image",
                    "x": "-976",
                    "y": "2896",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "158",
                    "height": "314",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzK.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzH",
                    "type": "Image",
                    "x": "-666.1",
                    "y": "2695",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "208",
                    "height": "423",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzH.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzJ",
                    "type": "Image",
                    "x": "-480",
                    "y": "2619",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "237",
                    "height": "535",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzJ.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzF",
                    "type": "Image",
                    "x": "624",
                    "y": "3958",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "236",
                    "height": "454",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzF.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzG",
                    "type": "Image",
                    "x": "512",
                    "y": "3877",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "262",
                    "height": "133",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzG.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzE",
                    "type": "Image",
                    "x": "1052",
                    "y": "4498",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "168",
                    "height": "86",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzE.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzD",
                    "type": "Image",
                    "x": "778",
                    "y": "4648",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "140",
                    "height": "276",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzD.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzC",
                    "type": "Image",
                    "x": "-738.5",
                    "y": "3773",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "253",
                    "height": "496",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzC.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzB",
                    "type": "Image",
                    "x": "-1046",
                    "y": "4128",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "224",
                    "height": "114",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqK",
                    "type": "Image",
                    "x": "-547",
                    "y": "4510",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "155",
                    "height": "298",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqK.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIzA",
                    "type": "Image",
                    "x": "-398.5",
                    "y": "4367.5",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "188",
                    "height": "347",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfIzA.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqJ",
                    "type": "Image",
                    "x": "-967.5",
                    "y": "4740",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "141",
                    "height": "276",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqJ.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqF",
                    "type": "Image",
                    "x": "531",
                    "y": "5567",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "179",
                    "height": "351",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqF.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqG",
                    "type": "Image",
                    "x": "677.5",
                    "y": "5318",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "211",
                    "height": "387",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqG.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqH",
                    "type": "Image",
                    "x": "472",
                    "y": "5030",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "266",
                    "height": "508",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqH.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqE",
                    "type": "Image",
                    "x": "1069",
                    "y": "5717",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "166",
                    "height": "173",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqE.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqD",
                    "type": "Image",
                    "x": "824",
                    "y": "6109",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "137",
                    "height": "252",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqD.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqC",
                    "type": "Image",
                    "x": "-797",
                    "y": "5206",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "264",
                    "height": "276",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqC.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqA",
                    "type": "Image",
                    "x": "-500",
                    "y": "5777",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "179",
                    "height": "343",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqA.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHqB",
                    "type": "Image",
                    "x": "-592.5",
                    "y": "5681",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "200",
                    "height": "209",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHqB.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHrK",
                    "type": "Image",
                    "x": "-1046",
                    "y": "6120",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "144",
                    "height": "282",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHrK.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHrJ",
                    "type": "Image",
                    "x": "969.5",
                    "y": "6790",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "330",
                    "height": "273",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHrJ.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHrH",
                    "type": "Image",
                    "x": "-775.5",
                    "y": "7063",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "221",
                    "height": "264",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHrH.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHrG",
                    "type": "Image",
                    "x": "-684",
                    "y": "7651",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "330",
                    "height": "273",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHrG.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHrF",
                    "type": "Image",
                    "x": "512",
                    "y": "7643",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "221",
                    "height": "264",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHrF.png",
                    "children": []
                }, {
                    "name": "rfNxGrfHrE",
                    "type": "Image",
                    "x": "-1098",
                    "y": "7700",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "221",
                    "height": "264",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHrF.png",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfPwD",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "2160",
                "height": "1620",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfJtGrfNqH-1",
                    "type": "rfjwf",
                    "x": "-826",
                    "y": "1955",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "285",
                    "height": "274",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfKzA-1",
                    "type": "rfjwf",
                    "x": "-814",
                    "y": "6456",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "500",
                    "height": "500",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfNqJ-2",
                    "type": "rfjwf",
                    "x": "974",
                    "y": "5081",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "290",
                    "height": "287",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "-1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfKyE-1",
                    "type": "rfjwf",
                    "x": "-817",
                    "y": "3255",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "500",
                    "height": "500",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfNqK-2",
                    "type": "rfjwf",
                    "x": "757",
                    "y": "7227",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "250",
                    "height": "252",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfJqH-1",
                    "type": "rfjwf",
                    "x": "301",
                    "y": "-110",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "600",
                    "height": "550",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfOzA-1",
                    "type": "rfjwf",
                    "x": "-755",
                    "y": "1161",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "210",
                    "height": "227",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfNqJ-1",
                    "type": "rfjwf",
                    "x": "-846",
                    "y": "1043",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "290",
                    "height": "287",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfNqK-1",
                    "type": "rfjwf",
                    "x": "843",
                    "y": "1643",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "250",
                    "height": "252",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }, {
                    "name": "rfJtGrfKyB-1",
                    "type": "rfjwf",
                    "x": "-456",
                    "y": "7473",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "440",
                    "height": "650",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfIqE",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "2160",
                "height": "1620",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfIqK",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "999",
                    "height": "1860",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJrJ.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIqJ",
                    "type": "Image",
                    "x": "0",
                    "y": "1860",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "999",
                    "height": "1507",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJrH.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIqH",
                    "type": "Image",
                    "x": "0",
                    "y": "3367",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "999",
                    "height": "1572",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJrG.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIqG",
                    "type": "Image",
                    "x": "-8",
                    "y": "4939",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "1015",
                    "height": "1507",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJrF.png",
                    "children": []
                }, {
                    "name": "rfNxGrfIqF",
                    "type": "Image",
                    "x": "-1",
                    "y": "6446",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "998",
                    "height": "1824",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJrE.png",
                    "children": []
                }, {
                    "name": "rfNxGrfOuB",
                    "type": "Image",
                    "x": "0",
                    "y": "7284",
                    "width": "2160",
                    "height": "1019",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOuB.png",
                    "children": []
                }]
            }, {
                "name": "rfNrCrfKqB",
                "type": "Group",
                "x": "0",
                "y": "55",
                "width": "2160",
                "height": "1741",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfJtGsiNr1",
                    "type": "rfjwf",
                    "x": "-430",
                    "y": "215",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "118",
                    "height": "136",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwC.png",
                    "children": []
                }, {
                    "name": "rfJtGsiNr2",
                    "type": "rfjwf",
                    "x": "-347",
                    "y": "403",
                    "rfJzF": "true",
                    "rfJwB": "0.5",
                    "rfJwA": "0",
                    "rfKxB": "0",
                    "rfKxA": "0",
                    "width": "118",
                    "height": "136",
                    "rfPwF": "0.5",
                    "rfPwE": "0",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfKwC.png",
                    "children": []
                }]
            }]
        },
        "tjMwqjkv": {
            "name": "tjMwqjkv",
            "children": [{
                "name": "rfNxGrfNrG",
                "type": "Image",
                "x": "0",
                "y": "0",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "2160",
                "height": "426",
                "rfPwF": "0.5",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwG.png",
                "children": []
            }, {
                "name": "rfNxGrfIrH",
                "type": "Image",
                "x": "-295",
                "y": "-15",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "467",
                "height": "121",
                "rfPwF": "0.5",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHrB.png",
                "children": []
            }, {
                "name": "rfNxGrfHzH",
                "type": "Image",
                "x": "130.5",
                "y": "-15",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "364",
                "height": "121",
                "rfPwF": "0.5",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHsK.png",
                "children": []
            }, {
                "name": "rfNxGrfLvH",
                "type": "Image",
                "x": "428",
                "y": "-15",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "208",
                "height": "121",
                "rfPwF": "0.5",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHsJ.png",
                "children": []
            }, {
                "name": "rfLwCrfIrJ",
                "type": "rflwd",
                "x": "-462",
                "y": "-81",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "275.98",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "C",
                "fontSize": "50",
                "text": "Score:",
                "rfNvJ": "right",
                "color": "#F8DF55",
                "children": []
            }, {
                "name": "rfLwCrfHzG",
                "type": "rflwd",
                "x": "-206",
                "y": "-76",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "250",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "65",
                "text": "123456",
                "rfNvJ": "left",
                "color": "#F8DF55",
                "children": []
            }, {
                "name": "rfLwCrfJsA",
                "type": "rflwd",
                "x": "160",
                "y": "-76",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "250",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "65",
                "text": "123456",
                "rfNvJ": "left",
                "color": "#F8DF55",
                "children": []
            }, {
                "name": "rfLwCkeys",
                "type": "rflwd",
                "x": "390",
                "y": "-76",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "150",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "65",
                "text": "999",
                "rfNvJ": "right",
                "color": "#75FBBA",
                "children": []
            }, {
                "name": "rfPyJrfHzC",
                "type": "Button",
                "x": "-15",
                "y": "15",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "1",
                "rfPwE": "0",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHsD.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }, {
                "name": "rfPyJrfHzB",
                "type": "Button",
                "x": "-15",
                "y": "15",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "1",
                "rfPwE": "0",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHsB.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }]
        },
        "rjMuDqjkv": {
            "name": "rjMuDqjkv",
            "children": [{
                "name": "rfNxGrfNrG",
                "type": "Image",
                "x": "0",
                "y": "0",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "2160",
                "height": "426",
                "rfPwF": "0.5",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfIwG.png",
                "children": []
            }, {
                "name": "rfNxGrfIrH",
                "type": "Image",
                "x": "15",
                "y": "-15",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "486",
                "height": "195",
                "rfPwF": "0",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHtK.png",
                "children": []
            }, {
                "name": "rfNxGrfHzH",
                "type": "Image",
                "x": "511",
                "y": "-15",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "488",
                "height": "129",
                "rfPwF": "0",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHtJ.png",
                "children": []
            }, {
                "name": "rfNxGrfLvH",
                "type": "Image",
                "x": "-21",
                "y": "-15",
                "rfJzF": "true",
                "rfJwB": "1",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "389",
                "height": "195",
                "rfPwF": "1",
                "rfPwE": "1",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHtH.png",
                "children": []
            }, {
                "name": "rfLwCrfIrJ",
                "type": "rflwd",
                "x": "260",
                "y": "-81",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "275.98",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "C",
                "fontSize": "60",
                "text": "Score:",
                "rfNvJ": "rfOsH",
                "color": "#F8DF55",
                "children": []
            }, {
                "name": "rfLwCrfHzG",
                "type": "rflwd",
                "x": "258",
                "y": "-156",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "300",
                "height": "120",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "85",
                "text": "123456",
                "rfNvJ": "rfOsH",
                "color": "#F8DF55",
                "children": []
            }, {
                "name": "rfLwCrfJsA",
                "type": "rflwd",
                "x": "754",
                "y": "-80",
                "rfJzF": "true",
                "rfJwB": "0",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "250",
                "height": "100",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "65",
                "text": "123456",
                "rfNvJ": "left",
                "color": "#F8DF55",
                "children": []
            }, {
                "name": "rfLwCkeys",
                "type": "rflwd",
                "x": "804",
                "y": "-117",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "1",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "300",
                "height": "200",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "rfOyJ": "A",
                "fontSize": "130",
                "text": "999",
                "rfNvJ": "right",
                "color": "#75FBBA",
                "children": []
            }, {
                "name": "rfPyJrfHzB",
                "type": "Button",
                "x": "803",
                "y": "100",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHsB.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }, {
                "name": "rfPyJrfOyF",
                "type": "Button",
                "x": "983",
                "y": "100",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfOqD.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }, {
                "name": "rfPyJrfHzC",
                "type": "Button",
                "x": "803",
                "y": "100",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfHsD.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }, {
                "name": "rfPyJrfOyE",
                "type": "Button",
                "x": "983",
                "y": "100",
                "rfJzF": "true",
                "rfJwB": "0.5",
                "rfJwA": "0",
                "rfKxB": "0",
                "rfKxA": "0",
                "width": "160",
                "height": "160",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "image": "rfOqC.png",
                "rfNvC": "",
                "rfJyD": "",
                "rfOxE": "",
                "children": []
            }]
        },
        "rhLqAqjkv": {
            "name": "rhLqAqjkv",
            "children": [{
                "name": "rfNrCrfOvJ",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfPxF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "704",
                    "height": "381",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJwC.png",
                    "children": []
                }, {
                    "name": "rfLwCmessage",
                    "type": "rflwd",
                    "x": "0",
                    "y": "89",
                    "width": "620",
                    "height": "142",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "50",
                    "text": "You don't have enough pellets!",
                    "rfNvJ": "rfOsH",
                    "color": "#D08018",
                    "children": []
                }, {
                    "name": "rfPyJclose",
                    "type": "Button",
                    "x": "6",
                    "y": "-60",
                    "width": "381",
                    "height": "123",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHtD.png",
                    "rfNvC": "",
                    "rfJyD": "rfHtC.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCclose",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "381",
                        "height": "123",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "continue",
                        "rfNvJ": "rfOsH",
                        "color": "#D08018",
                        "children": []
                    }]
                }]
            }]
        },
        "pauseqhnr": {
            "name": "pauseqhnr",
            "children": [{
                "name": "rfNrCrfOvJ",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "1620",
                "height": "1080",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGrfPxF",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "962",
                    "height": "1362",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfJwD.png",
                    "children": []
                }, {
                    "name": "rfLwCrfNvG",
                    "type": "rflwd",
                    "x": "0",
                    "y": "600",
                    "width": "810",
                    "height": "540",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "C",
                    "fontSize": "85",
                    "text": "Pause",
                    "rfNvJ": "rfOsH",
                    "color": "#63391D",
                    "children": []
                }, {
                    "name": "rfPyJclose",
                    "type": "Button",
                    "x": "404",
                    "y": "608",
                    "width": "70",
                    "height": "69",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqE.png",
                    "rfNvC": "",
                    "rfJyD": "",
                    "rfOxE": "",
                    "children": []
                }, {
                    "name": "rfPyJrfHuF",
                    "type": "Button",
                    "x": "0",
                    "y": "387",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHuJ.png",
                    "rfNvC": "",
                    "rfJyD": "rfHuH.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCrfHuF",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "810",
                        "height": "150",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Resume",
                        "rfNvJ": "rfOsH",
                        "color": "#673D25",
                        "children": []
                    }]
                }, {
                    "name": "rfPyJrfJzD",
                    "type": "Button",
                    "x": "0",
                    "y": "127",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHuE.png",
                    "rfNvC": "",
                    "rfJyD": "rfHuD.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCrfJzD",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "810",
                        "height": "150",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Retry",
                        "rfNvJ": "rfOsH",
                        "color": "#F5D74F",
                        "children": []
                    }]
                }, {
                    "name": "rfPyJrfHzE",
                    "type": "Button",
                    "x": "0",
                    "y": "-133",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHuA.png",
                    "rfNvC": "",
                    "rfJyD": "rfHvK.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCrfHzE",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "810",
                        "height": "150",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Sound on",
                        "rfNvJ": "rfOsH",
                        "color": "#F8D15A",
                        "children": []
                    }]
                }, {
                    "name": "rfPyJrfHzD",
                    "type": "Button",
                    "x": "0",
                    "y": "-133",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHuA.png",
                    "rfNvC": "",
                    "rfJyD": "rfHvK.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCrfHzD",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "810",
                        "height": "150",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Sound off",
                        "rfNvJ": "rfOsH",
                        "color": "#F8D15A",
                        "children": []
                    }]
                }, {
                    "name": "rfPyJmap",
                    "type": "Button",
                    "x": "0",
                    "y": "-393",
                    "width": "762",
                    "height": "162",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfOqG.png",
                    "rfNvC": "",
                    "rfJyD": "rfOqF.png",
                    "rfOxE": "",
                    "children": [{
                        "name": "rfLwCmap",
                        "type": "rflwd",
                        "x": "0",
                        "y": "0",
                        "width": "810",
                        "height": "150",
                        "rfPwF": "0.5",
                        "rfPwE": "0.5",
                        "rfIqA": "1",
                        "rfIrK": "1",
                        "rfIqD": "0",
                        "rfIxE": "true",
                        "rfOyJ": "B",
                        "fontSize": "65",
                        "text": "Back to map",
                        "rfNvJ": "rfOsH",
                        "color": "#673D25",
                        "children": []
                    }]
                }]
            }]
        },
        "vaKxqjkv": {
            "name": "vaKxqjkv",
            "children": [{
                "name": "rfNrCxiMtreOzA",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "16.5",
                    "width": "704",
                    "height": "507",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHvC.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "0",
                    "y": "121",
                    "width": "700",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "Swipe to move",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt1_right",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "16.5",
                    "width": "704",
                    "height": "507",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHvC.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "0",
                    "y": "121",
                    "width": "600",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "Swipe to move",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt4",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "-90.5",
                    "width": "704",
                    "height": "721",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHwG.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "0",
                    "y": "121",
                    "width": "600",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "Swipe to jump!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt5",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "-90.5",
                    "width": "704",
                    "height": "721",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHwD.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "0",
                    "y": "121",
                    "width": "600",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "Swipe down to slide!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMtreNrD",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "16.5",
                    "width": "704",
                    "height": "507",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHvC.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "0",
                    "y": "121",
                    "width": "600",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "Swipe to take the corner!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt6_right",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "16.5",
                    "width": "704",
                    "height": "507",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHvC.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "0",
                    "y": "121",
                    "width": "600",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "Swipe to take the corner!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt7",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "-90.5",
                    "width": "704",
                    "height": "721",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHwG.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "0",
                    "y": "121",
                    "width": "600",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "Swipe up twice to air dash!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt8",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "false",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "-90.5",
                    "width": "704",
                    "height": "721",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHwD.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "0",
                    "y": "121",
                    "width": "600",
                    "height": "100",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "Swipe down twice to powerslide!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt8_pc",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "939",
                    "height": "370",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHyK.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "180",
                    "y": "0",
                    "width": "400",
                    "height": "250",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "twice to powerslide!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt7_pc",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "939",
                    "height": "370",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHyH.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "180",
                    "y": "0",
                    "width": "400",
                    "height": "250",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "60",
                    "text": "twice to air dash",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt6_right_pc",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "939",
                    "height": "370",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHyF.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "180",
                    "y": "0",
                    "width": "400",
                    "height": "250",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "to take the corner!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt6_left_pc",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "939",
                    "height": "370",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHyF.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "180",
                    "y": "0",
                    "width": "400",
                    "height": "250",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "to take the corner!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt5_pc",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "939",
                    "height": "370",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHyK.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "180",
                    "y": "0",
                    "width": "400",
                    "height": "250",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "to take the corner!",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt4_pc",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "939",
                    "height": "370",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHyH.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "180",
                    "y": "0",
                    "width": "400",
                    "height": "250",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "Press the UP key to jump",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt1_right_pc",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "939",
                    "height": "370",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHyF.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "180",
                    "y": "0",
                    "width": "400",
                    "height": "250",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "to move",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }, {
                "name": "rfNrCxiMt1_left_pc",
                "type": "Group",
                "x": "0",
                "y": "0",
                "width": "810",
                "height": "540",
                "rfPwF": "0.5",
                "rfPwE": "0.5",
                "rfIqA": "1",
                "rfIrK": "1",
                "rfIqD": "0",
                "rfIxE": "true",
                "children": [{
                    "name": "rfNxGbackground",
                    "type": "Image",
                    "x": "0",
                    "y": "0",
                    "width": "939",
                    "height": "370",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "image": "rfHyF.png",
                    "children": []
                }, {
                    "name": "rfLwCtext",
                    "type": "rflwd",
                    "x": "180",
                    "y": "0",
                    "width": "400",
                    "height": "250",
                    "rfPwF": "0.5",
                    "rfPwE": "0.5",
                    "rfIqA": "1",
                    "rfIrK": "1",
                    "rfIqD": "0",
                    "rfIxE": "true",
                    "rfOyJ": "B",
                    "fontSize": "72",
                    "text": "to move",
                    "rfNvJ": "rfOsH",
                    "color": "#F5D74F",
                    "children": []
                }]
            }]
        }
    },
    "music": {
        "rfGwE": ["au/music.mp3"],
        "rfGwD": {
            "rfGwC-rfOyC": {
                "rfIsA": 0,
                "rfOxC": 89.36489795918368,
                "loop": false
            },
            "rfGwB": {
                "rfIsA": 91,
                "rfOxC": 97.92244897959183,
                "loop": false
            },
            "rfGwA": {
                "rfIsA": 99,
                "rfOxC": 105.60897959183673,
                "loop": false
            },
            "rfGxK": {
                "rfIsA": 107,
                "rfOxC": 196.36489795918368,
                "loop": false
            },
            "rfGxJ-rfGxG": {
                "rfIsA": 198,
                "rfOxC": 202.69743764172335,
                "loop": false
            },
            "rfGxH": {
                "rfIsA": 204,
                "rfOxC": 259.8759183673469,
                "loop": false
            }
        }
    },
    "effects": {
        "rfGwE": ["au/effects.mp3"],
        "rfGwD": {
            "rfGxF": {
                "rfIsA": 0,
                "rfOxC": 0.062494331065759634,
                "loop": false
            },
            "rfGxE": {
                "rfIsA": 2,
                "rfOxC": 2.303106575963719,
                "loop": false
            },
            "rfGxD": {
                "rfIsA": 4,
                "rfOxC": 5.405351473922902,
                "loop": false
            },
            "rfGxC": {
                "rfIsA": 7,
                "rfOxC": 7.821428571428571,
                "loop": false
            },
            "rfGxB": {
                "rfIsA": 9,
                "rfOxC": 10.171859410430839,
                "loop": false
            },
            "rfGxA": {
                "rfIsA": 12,
                "rfOxC": 12.678571428571429,
                "loop": false
            },
            "rfGyK": {
                "rfIsA": 14,
                "rfOxC": 15.527641723356009,
                "loop": false
            },
            "rfGyJ": {
                "rfIsA": 17,
                "rfOxC": 18.607142857142858,
                "loop": false
            },
            "rfGyH": {
                "rfIsA": 20,
                "rfOxC": 20.289274376417232,
                "loop": false
            },
            "rfGyG": {
                "rfIsA": 22,
                "rfOxC": 25,
                "loop": false
            },
            "rfGyF": {
                "rfIsA": 26,
                "rfOxC": 26.886145124716553,
                "loop": false
            },
            "rfGyE": {
                "rfIsA": 28,
                "rfOxC": 28.866530612244897,
                "loop": false
            },
            "rfGyD": {
                "rfIsA": 30,
                "rfOxC": 31.714285714285715,
                "loop": false
            },
            "rfGyC": {
                "rfIsA": 33,
                "rfOxC": 33.285714285714285,
                "loop": false
            },
            "rfGyB": {
                "rfIsA": 35,
                "rfOxC": 36.37498866213152,
                "loop": false
            },
            "rfGyA": {
                "rfIsA": 38,
                "rfOxC": 38.964285714285715,
                "loop": false
            },
            "rfGzK": {
                "rfIsA": 40,
                "rfOxC": 46.33659863945578,
                "loop": false
            },
            "rfGzJ": {
                "rfIsA": 48,
                "rfOxC": 49.27721088435374,
                "loop": false
            },
            "rfGzH": {
                "rfIsA": 51,
                "rfOxC": 54.803560090702945,
                "loop": false
            },
            "rfGzG": {
                "rfIsA": 56,
                "rfOxC": 56.589727891156464,
                "loop": false
            },
            "rfGzF": {
                "rfIsA": 58,
                "rfOxC": 59.34863945578231,
                "loop": false
            },
            "rfGzE": {
                "rfIsA": 61,
                "rfOxC": 63.116961451247164,
                "loop": false
            },
            "rfGzD": {
                "rfIsA": 65,
                "rfOxC": 66.5,
                "loop": false
            },
            "rfGzC": {
                "rfIsA": 68,
                "rfOxC": 69.71383219954649,
                "loop": false
            },
            "rfGzB": {
                "rfIsA": 71,
                "rfOxC": 74.19596371882086,
                "loop": false
            },
            "rfGzA": {
                "rfIsA": 76,
                "rfOxC": 80.01786848072562,
                "loop": false
            },
            "rePqK": {
                "rfIsA": 82,
                "rfOxC": 85,
                "loop": false
            },
            "rePqJ": {
                "rfIsA": 86,
                "rfOxC": 86.36115646258503,
                "loop": false
            },
            "rePqH": {
                "rfIsA": 88,
                "rfOxC": 88.85891156462586,
                "loop": false
            },
            "rePqG": {
                "rfIsA": 90,
                "rfOxC": 98.57142857142857,
                "loop": false
            },
            "rePqF": {
                "rfIsA": 100,
                "rfOxC": 100.52054421768707,
                "loop": false
            },
            "rePqE": {
                "rfIsA": 102,
                "rfOxC": 102.74643990929705,
                "loop": false
            },
            "rePqD": {
                "rfIsA": 104,
                "rfOxC": 109.83124716553289,
                "loop": false
            },
            "rePqC": {
                "rfIsA": 111,
                "rfOxC": 112.5,
                "loop": false
            },
            "rePqB": {
                "rfIsA": 114,
                "rfOxC": 115.39285714285714,
                "loop": false
            },
            "rePqA": {
                "rfIsA": 117,
                "rfOxC": 118.60714285714286,
                "loop": false
            },
            "rePrK": {
                "rfIsA": 120,
                "rfOxC": 120.1325850340136,
                "loop": false
            },
            "rePrJ": {
                "rfIsA": 122,
                "rfOxC": 122.40444444444445,
                "loop": false
            },
            "rePrH": {
                "rfIsA": 124,
                "rfOxC": 124.67857142857143,
                "loop": false
            },
            "rePrG": {
                "rfIsA": 126,
                "rfOxC": 126.54945578231292,
                "loop": false
            },
            "rePrF": {
                "rfIsA": 128,
                "rfOxC": 128.71428571428572,
                "loop": false
            },
            "rePrE": {
                "rfIsA": 130,
                "rfOxC": 130.5553514739229,
                "loop": false
            },
            "rePrD": {
                "rfIsA": 132,
                "rfOxC": 132.1325850340136,
                "loop": false
            }
        }
    },
    "reNsK": {
        "frames": [{
            "rfGvB": "rfLvJ.png",
            "frame": {
                "x": 368,
                "y": 1,
                "w": 132,
                "h": 129
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 132,
                "h": 129
            },
            "rfGwG": {
                "w": 132,
                "h": 129
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIyK.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 365,
                "h": 356
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 365,
                "h": 356
            },
            "rfGwG": {
                "w": 365,
                "h": 356
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 501,
                "h": 358
            },
            "scale": "0.55"
        }
    },
    "rfPyK": {
        "frames": [{
            "rfGvB": "rfHuE.png",
            "frame": {
                "x": 1082,
                "y": 768,
                "w": 419,
                "h": 89
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 419,
                "h": 89
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHuD.png",
            "frame": {
                "x": 1287,
                "y": 859,
                "w": 415,
                "h": 86
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 415,
                "h": 86
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOqE.png",
            "frame": {
                "x": 684,
                "y": 814,
                "w": 39,
                "h": 38
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 39,
                "h": 38
            },
            "rfGwG": {
                "w": 39,
                "h": 38
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrG.png",
            "frame": {
                "x": 965,
                "y": 773,
                "w": 115,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 115,
                "h": 111
            },
            "rfGwG": {
                "w": 115,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrF.png",
            "frame": {
                "x": 965,
                "y": 886,
                "w": 113,
                "h": 108
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 1,
                "y": 0,
                "w": 113,
                "h": 108
            },
            "rfGwG": {
                "w": 115,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrB.png",
            "frame": {
                "x": 1108,
                "y": 610,
                "w": 89,
                "h": 88
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 89,
                "h": 88
            },
            "rfGwG": {
                "w": 89,
                "h": 88
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNwG.png",
            "frame": {
                "x": 1199,
                "y": 648,
                "w": 85,
                "h": 85
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 85,
                "h": 85
            },
            "rfGwG": {
                "w": 89,
                "h": 88
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOuB.png",
            "frame": {
                "x": 552,
                "y": 1,
                "w": 1188,
                "h": 560
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 1188,
                "h": 560
            },
            "rfGwG": {
                "w": 1188,
                "h": 560
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNwF.png",
            "frame": {
                "x": 676,
                "y": 859,
                "w": 122,
                "h": 128
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 122,
                "h": 128
            },
            "rfGwG": {
                "w": 122,
                "h": 128
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfLvF.png",
            "frame": {
                "x": 1077,
                "y": 715,
                "w": 30,
                "h": 51
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 30,
                "h": 51
            },
            "rfGwG": {
                "w": 30,
                "h": 51
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfLvE.png",
            "frame": {
                "x": 1704,
                "y": 563,
                "w": 24,
                "h": 45
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 3,
                "y": 3,
                "w": 24,
                "h": 45
            },
            "rfGwG": {
                "w": 30,
                "h": 51
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfLvB.png",
            "frame": {
                "x": 725,
                "y": 814,
                "w": 9,
                "h": 17
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 9,
                "h": 17
            },
            "rfGwG": {
                "w": 9,
                "h": 17
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJrE.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 549,
                "h": 1003
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 549,
                "h": 1003
            },
            "rfGwG": {
                "w": 549,
                "h": 1003
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNwE.png",
            "frame": {
                "x": 1021,
                "y": 715,
                "w": 54,
                "h": 53
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 54,
                "h": 53
            },
            "rfGwG": {
                "w": 54,
                "h": 53
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIyE.png",
            "frame": {
                "x": 1080,
                "y": 886,
                "w": 205,
                "h": 107
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 205,
                "h": 107
            },
            "rfGwG": {
                "w": 205,
                "h": 107
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIyD.png",
            "frame": {
                "x": 1503,
                "y": 563,
                "w": 158,
                "h": 83
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 158,
                "h": 83
            },
            "rfGwG": {
                "w": 158,
                "h": 83
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIyC.png",
            "frame": {
                "x": 684,
                "y": 563,
                "w": 122,
                "h": 249
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 122,
                "h": 249
            },
            "rfGwG": {
                "w": 122,
                "h": 249
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIyB.png",
            "frame": {
                "x": 924,
                "y": 715,
                "w": 95,
                "h": 56
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 95,
                "h": 56
            },
            "rfGwG": {
                "w": 95,
                "h": 56
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIyA.png",
            "frame": {
                "x": 889,
                "y": 798,
                "w": 74,
                "h": 166
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 74,
                "h": 166
            },
            "rfGwG": {
                "w": 74,
                "h": 166
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzK.png",
            "frame": {
                "x": 800,
                "y": 814,
                "w": 87,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 87,
                "h": 173
            },
            "rfGwG": {
                "w": 87,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzJ.png",
            "frame": {
                "x": 552,
                "y": 563,
                "w": 130,
                "h": 294
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 130,
                "h": 294
            },
            "rfGwG": {
                "w": 130,
                "h": 294
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzH.png",
            "frame": {
                "x": 808,
                "y": 563,
                "w": 114,
                "h": 233
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 114,
                "h": 233
            },
            "rfGwG": {
                "w": 114,
                "h": 233
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHrJ.png",
            "frame": {
                "x": 924,
                "y": 563,
                "w": 182,
                "h": 150
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 182,
                "h": 150
            },
            "rfGwG": {
                "w": 182,
                "h": 150
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHrH.png",
            "frame": {
                "x": 552,
                "y": 859,
                "w": 122,
                "h": 145
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 122,
                "h": 145
            },
            "rfGwG": {
                "w": 122,
                "h": 145
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHrG.png",
            "frame": {
                "x": 924,
                "y": 563,
                "w": 182,
                "h": 150
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 182,
                "h": 150
            },
            "rfGwG": {
                "w": 182,
                "h": 150
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHrF.png",
            "frame": {
                "x": 552,
                "y": 859,
                "w": 122,
                "h": 145
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 122,
                "h": 145
            },
            "rfGwG": {
                "w": 122,
                "h": 145
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1741,
                "h": 1005
            },
            "scale": "0.55"
        }
    },
    "rfNrF": {
        "frames": [{
            "rfGvB": "rfNwJ.png",
            "frame": {
                "x": 193,
                "y": 1412,
                "w": 88,
                "h": 87
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 88,
                "h": 87
            },
            "rfGwG": {
                "w": 88,
                "h": 87
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNwG.png",
            "frame": {
                "x": 181,
                "y": 1501,
                "w": 88,
                "h": 87
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 88,
                "h": 87
            },
            "rfGwG": {
                "w": 88,
                "h": 87
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNwC.png",
            "frame": {
                "x": 181,
                "y": 1590,
                "w": 88,
                "h": 87
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 88,
                "h": 87
            },
            "rfGwG": {
                "w": 88,
                "h": 87
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNxK.png",
            "frame": {
                "x": 101,
                "y": 1679,
                "w": 88,
                "h": 87
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 88,
                "h": 87
            },
            "rfGwG": {
                "w": 88,
                "h": 87
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKtG.png",
            "frame": {
                "x": 1,
                "y": 939,
                "w": 234,
                "h": 234
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 234,
                "h": 234
            },
            "rfGwG": {
                "w": 234,
                "h": 234
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHsJ.png",
            "frame": {
                "x": 35,
                "y": 1606,
                "w": 114,
                "h": 67
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 114,
                "h": 67
            },
            "rfGwG": {
                "w": 114,
                "h": 67
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHtH.png",
            "frame": {
                "x": 1,
                "y": 1175,
                "w": 214,
                "h": 107
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 214,
                "h": 107
            },
            "rfGwG": {
                "w": 214,
                "h": 107
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHsK.png",
            "frame": {
                "x": 1,
                "y": 1284,
                "w": 200,
                "h": 67
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 200,
                "h": 67
            },
            "rfGwG": {
                "w": 200,
                "h": 67
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHtJ.png",
            "frame": {
                "x": 1,
                "y": 110,
                "w": 268,
                "h": 71
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 268,
                "h": 71
            },
            "rfGwG": {
                "w": 268,
                "h": 71
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHrB.png",
            "frame": {
                "x": 1,
                "y": 510,
                "w": 257,
                "h": 67
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 257,
                "h": 67
            },
            "rfGwG": {
                "w": 257,
                "h": 67
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHtK.png",
            "frame": {
                "x": 1,
                "y": 183,
                "w": 267,
                "h": 107
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 267,
                "h": 107
            },
            "rfGwG": {
                "w": 267,
                "h": 107
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKwH.png",
            "frame": {
                "x": 35,
                "y": 1679,
                "w": 64,
                "h": 92
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 64,
                "h": 92
            },
            "rfGwG": {
                "w": 64,
                "h": 92
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKwE.png",
            "frame": {
                "x": 203,
                "y": 1331,
                "w": 74,
                "h": 79
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 74,
                "h": 79
            },
            "rfGwG": {
                "w": 74,
                "h": 79
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKwB.png",
            "frame": {
                "x": 217,
                "y": 1254,
                "w": 65,
                "h": 75
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 65,
                "h": 75
            },
            "rfGwG": {
                "w": 65,
                "h": 75
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKxJ.png",
            "frame": {
                "x": 191,
                "y": 1679,
                "w": 62,
                "h": 79
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 62,
                "h": 79
            },
            "rfGwG": {
                "w": 62,
                "h": 79
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "tutBg.png",
            "frame": {
                "x": 260,
                "y": 510,
                "w": 29,
                "h": 742
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 29,
                "h": 742
            },
            "rfGwG": {
                "w": 29,
                "h": 743
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwG.png",
            "frame": {
                "x": 1,
                "y": 1501,
                "w": 32,
                "h": 234
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 32,
                "h": 234
            },
            "rfGwG": {
                "w": 32,
                "h": 234
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNwDrijv.png",
            "frame": {
                "x": 1,
                "y": 579,
                "w": 238,
                "h": 70
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 238,
                "h": 70
            },
            "rfGwG": {
                "w": 238,
                "h": 70
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwC.png",
            "frame": {
                "x": 1,
                "y": 651,
                "w": 238,
                "h": 70
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 238,
                "h": 70
            },
            "rfGwG": {
                "w": 238,
                "h": 70
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwB.png",
            "frame": {
                "x": 1,
                "y": 723,
                "w": 238,
                "h": 70
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 238,
                "h": 70
            },
            "rfGwG": {
                "w": 238,
                "h": 70
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwA.png",
            "frame": {
                "x": 1,
                "y": 795,
                "w": 238,
                "h": 70
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 238,
                "h": 70
            },
            "rfGwG": {
                "w": 238,
                "h": 70
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIxK.png",
            "frame": {
                "x": 1,
                "y": 867,
                "w": 238,
                "h": 70
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 238,
                "h": 70
            },
            "rfGwG": {
                "w": 238,
                "h": 70
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIxJ.png",
            "frame": {
                "x": 1,
                "y": 1353,
                "w": 190,
                "h": 70
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 190,
                "h": 70
            },
            "rfGwG": {
                "w": 190,
                "h": 70
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNwC.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 289,
                "h": 107
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 289,
                "h": 107
            },
            "rfGwG": {
                "w": 289,
                "h": 107
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIxH.png",
            "frame": {
                "x": 1,
                "y": 292,
                "w": 267,
                "h": 107
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 267,
                "h": 107
            },
            "rfGwG": {
                "w": 267,
                "h": 107
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIxG.png",
            "frame": {
                "x": 1,
                "y": 1425,
                "w": 190,
                "h": 70
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 190,
                "h": 70
            },
            "rfGwG": {
                "w": 190,
                "h": 70
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNwB.png",
            "frame": {
                "x": 35,
                "y": 1497,
                "w": 144,
                "h": 107
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 144,
                "h": 107
            },
            "rfGwG": {
                "w": 144,
                "h": 107
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIxF.png",
            "frame": {
                "x": 1,
                "y": 401,
                "w": 266,
                "h": 107
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 266,
                "h": 107
            },
            "rfGwG": {
                "w": 266,
                "h": 107
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwK.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 289,
                "h": 107
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 289,
                "h": 107
            },
            "rfGwG": {
                "w": 289,
                "h": 107
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwJ.png",
            "frame": {
                "x": 35,
                "y": 1497,
                "w": 144,
                "h": 107
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 144,
                "h": 107
            },
            "rfGwG": {
                "w": 144,
                "h": 107
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 291,
                "h": 1772
            },
            "scale": "0.55"
        }
    },
    "rfNrE": {
        "frames": [{
            "rfGvB": "reNwH.png",
            "frame": {
                "x": 771,
                "y": 303,
                "w": 44,
                "h": 113
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 44,
                "h": 113
            },
            "rfGwG": {
                "w": 44,
                "h": 113
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNwJ.png",
            "frame": {
                "x": 863,
                "y": 690,
                "w": 79,
                "h": 115
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 79,
                "h": 115
            },
            "rfGwG": {
                "w": 79,
                "h": 115
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNwK.png",
            "frame": {
                "x": 736,
                "y": 518,
                "w": 78,
                "h": 118
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 78,
                "h": 118
            },
            "rfGwG": {
                "w": 78,
                "h": 118
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfiqb.png",
            "frame": {
                "x": 693,
                "y": 1,
                "w": 238,
                "h": 85
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 238,
                "h": 85
            },
            "rfGwG": {
                "w": 238,
                "h": 85
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOqJ.png",
            "frame": {
                "x": 1,
                "y": 868,
                "w": 419,
                "h": 89
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 419,
                "h": 89
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOqH.png",
            "frame": {
                "x": 422,
                "y": 868,
                "w": 415,
                "h": 86
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 415,
                "h": 86
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHtD.png",
            "frame": {
                "x": 693,
                "y": 88,
                "w": 210,
                "h": 68
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 210,
                "h": 68
            },
            "rfGwG": {
                "w": 210,
                "h": 68
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHtC.png",
            "frame": {
                "x": 693,
                "y": 158,
                "w": 210,
                "h": 68
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 210,
                "h": 68
            },
            "rfGwG": {
                "w": 210,
                "h": 68
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrJ.png",
            "frame": {
                "x": 816,
                "y": 459,
                "w": 115,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 115,
                "h": 111
            },
            "rfGwG": {
                "w": 115,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrH.png",
            "frame": {
                "x": 839,
                "y": 349,
                "w": 112,
                "h": 108
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 1,
                "y": 0,
                "w": 112,
                "h": 108
            },
            "rfGwG": {
                "w": 115,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKwG.png",
            "frame": {
                "x": 552,
                "y": 721,
                "w": 104,
                "h": 131
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 104,
                "h": 131
            },
            "rfGwG": {
                "w": 104,
                "h": 131
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKwD.png",
            "frame": {
                "x": 839,
                "y": 228,
                "w": 112,
                "h": 119
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 112,
                "h": 119
            },
            "rfGwG": {
                "w": 112,
                "h": 119
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKwA.png",
            "frame": {
                "x": 843,
                "y": 572,
                "w": 106,
                "h": 116
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 106,
                "h": 116
            },
            "rfGwG": {
                "w": 106,
                "h": 116
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKxH.png",
            "frame": {
                "x": 738,
                "y": 638,
                "w": 103,
                "h": 118
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 103,
                "h": 118
            },
            "rfGwG": {
                "w": 103,
                "h": 118
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJrG.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 549,
                "h": 865
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 549,
                "h": 865
            },
            "rfGwG": {
                "w": 549,
                "h": 865
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "uiKey.png",
            "frame": {
                "x": 863,
                "y": 807,
                "w": 34,
                "h": 64
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 34,
                "h": 64
            },
            "rfGwG": {
                "w": 34,
                "h": 64
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNwA.png",
            "frame": {
                "x": 905,
                "y": 88,
                "w": 42,
                "h": 73
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 42,
                "h": 73
            },
            "rfGwG": {
                "w": 42,
                "h": 73
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIvB.png",
            "frame": {
                "x": 863,
                "y": 807,
                "w": 34,
                "h": 64
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 34,
                "h": 64
            },
            "rfGwG": {
                "w": 34,
                "h": 64
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIvA.png",
            "frame": {
                "x": 905,
                "y": 88,
                "w": 42,
                "h": 73
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 42,
                "h": 73
            },
            "rfGwG": {
                "w": 42,
                "h": 73
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzG.png",
            "frame": {
                "x": 693,
                "y": 228,
                "w": 144,
                "h": 73
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 144,
                "h": 73
            },
            "rfGwG": {
                "w": 144,
                "h": 73
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzF.png",
            "frame": {
                "x": 552,
                "y": 276,
                "w": 130,
                "h": 250
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 130,
                "h": 250
            },
            "rfGwG": {
                "w": 130,
                "h": 250
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzE.png",
            "frame": {
                "x": 684,
                "y": 469,
                "w": 92,
                "h": 47
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 92,
                "h": 47
            },
            "rfGwG": {
                "w": 92,
                "h": 47
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzD.png",
            "frame": {
                "x": 657,
                "y": 528,
                "w": 77,
                "h": 152
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 77,
                "h": 152
            },
            "rfGwG": {
                "w": 77,
                "h": 152
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzC.png",
            "frame": {
                "x": 552,
                "y": 1,
                "w": 139,
                "h": 273
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 139,
                "h": 273
            },
            "rfGwG": {
                "w": 139,
                "h": 273
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzB.png",
            "frame": {
                "x": 738,
                "y": 758,
                "w": 123,
                "h": 63
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 123,
                "h": 63
            },
            "rfGwG": {
                "w": 123,
                "h": 63
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIzA.png",
            "frame": {
                "x": 552,
                "y": 528,
                "w": 103,
                "h": 191
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 103,
                "h": 191
            },
            "rfGwG": {
                "w": 103,
                "h": 191
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqK.png",
            "frame": {
                "x": 684,
                "y": 303,
                "w": 85,
                "h": 164
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 85,
                "h": 164
            },
            "rfGwG": {
                "w": 85,
                "h": 164
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqJ.png",
            "frame": {
                "x": 658,
                "y": 682,
                "w": 78,
                "h": 152
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 78,
                "h": 152
            },
            "rfGwG": {
                "w": 78,
                "h": 152
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 952,
                "h": 958
            },
            "scale": "0.55"
        }
    },
    "rfKsF": {
        "frames": [{
            "rfGvB": "rfHuJ.png",
            "frame": {
                "x": 556,
                "y": 497,
                "w": 419,
                "h": 89
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 419,
                "h": 89
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHuH.png",
            "frame": {
                "x": 556,
                "y": 588,
                "w": 415,
                "h": 86
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 415,
                "h": 86
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOqB.png",
            "frame": {
                "x": 821,
                "y": 387,
                "w": 104,
                "h": 104
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 104,
                "h": 104
            },
            "rfGwG": {
                "w": 104,
                "h": 104
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHsD.png",
            "frame": {
                "x": 668,
                "y": 676,
                "w": 104,
                "h": 104
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 104,
                "h": 104
            },
            "rfGwG": {
                "w": 104,
                "h": 104
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHsB.png",
            "frame": {
                "x": 774,
                "y": 676,
                "w": 104,
                "h": 104
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 104,
                "h": 104
            },
            "rfGwG": {
                "w": 104,
                "h": 104
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrC.png",
            "frame": {
                "x": 921,
                "y": 186,
                "w": 88,
                "h": 88
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 88,
                "h": 88
            },
            "rfGwG": {
                "w": 88,
                "h": 88
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxK.png",
            "frame": {
                "x": 921,
                "y": 276,
                "w": 84,
                "h": 85
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 84,
                "h": 85
            },
            "rfGwG": {
                "w": 88,
                "h": 88
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfPyJpause.png",
            "frame": {
                "x": 821,
                "y": 387,
                "w": 104,
                "h": 104
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 104,
                "h": 104
            },
            "rfGwG": {
                "w": 104,
                "h": 104
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNwD.png",
            "frame": {
                "x": 918,
                "y": 142,
                "w": 56,
                "h": 42
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 56,
                "h": 42
            },
            "rfGwG": {
                "w": 56,
                "h": 42
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKtH.png",
            "frame": {
                "x": 704,
                "y": 1,
                "w": 112,
                "h": 122
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 112,
                "h": 122
            },
            "rfGwG": {
                "w": 112,
                "h": 122
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJrF.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 553,
                "h": 829
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 5,
                "y": 0,
                "w": 553,
                "h": 829
            },
            "rfGwG": {
                "w": 558,
                "h": 829
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqH.png",
            "frame": {
                "x": 556,
                "y": 1,
                "w": 146,
                "h": 279
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 146,
                "h": 279
            },
            "rfGwG": {
                "w": 146,
                "h": 279
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqG.png",
            "frame": {
                "x": 556,
                "y": 282,
                "w": 116,
                "h": 213
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 116,
                "h": 213
            },
            "rfGwG": {
                "w": 116,
                "h": 213
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqF.png",
            "frame": {
                "x": 818,
                "y": 1,
                "w": 98,
                "h": 193
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 98,
                "h": 193
            },
            "rfGwG": {
                "w": 98,
                "h": 193
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqE.png",
            "frame": {
                "x": 880,
                "y": 676,
                "w": 91,
                "h": 95
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 91,
                "h": 95
            },
            "rfGwG": {
                "w": 91,
                "h": 95
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqD.png",
            "frame": {
                "x": 918,
                "y": 1,
                "w": 75,
                "h": 139
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 75,
                "h": 139
            },
            "rfGwG": {
                "w": 75,
                "h": 139
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqC.png",
            "frame": {
                "x": 674,
                "y": 282,
                "w": 145,
                "h": 152
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 145,
                "h": 152
            },
            "rfGwG": {
                "w": 145,
                "h": 152
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqB.png",
            "frame": {
                "x": 556,
                "y": 676,
                "w": 110,
                "h": 115
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 110,
                "h": 115
            },
            "rfGwG": {
                "w": 110,
                "h": 115
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHqA.png",
            "frame": {
                "x": 821,
                "y": 196,
                "w": 98,
                "h": 189
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 98,
                "h": 189
            },
            "rfGwG": {
                "w": 98,
                "h": 189
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHrK.png",
            "frame": {
                "x": 704,
                "y": 125,
                "w": 79,
                "h": 155
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 79,
                "h": 155
            },
            "rfGwG": {
                "w": 79,
                "h": 155
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1010,
                "h": 831
            },
            "scale": "0.55"
        }
    },
    "reNsG": {
        "frames": [{
            "rfGvB": "ingameLoaderBg.jpg",
            "frame": {
                "x": 3,
                "y": 3,
                "w": 756,
                "h": 672
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 756,
                "h": 672
            },
            "rfGwG": {
                "w": 756,
                "h": 672
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKuH.jpg",
            "frame": {
                "x": 765,
                "y": 3,
                "w": 756,
                "h": 611
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 756,
                "h": 611
            },
            "rfGwG": {
                "w": 756,
                "h": 611
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKuG.jpg",
            "frame": {
                "x": 765,
                "y": 620,
                "w": 756,
                "h": 611
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 756,
                "h": 611
            },
            "rfGwG": {
                "w": 756,
                "h": 611
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKuF.jpg",
            "frame": {
                "x": 3,
                "y": 681,
                "w": 756,
                "h": 611
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 756,
                "h": 611
            },
            "rfGwG": {
                "w": 756,
                "h": 611
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKuE.jpg",
            "frame": {
                "x": 765,
                "y": 1237,
                "w": 756,
                "h": 611
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 756,
                "h": 611
            },
            "rfGwG": {
                "w": 756,
                "h": 611
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKuD.jpg",
            "frame": {
                "x": 3,
                "y": 1298,
                "w": 756,
                "h": 609
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 756,
                "h": 609
            },
            "rfGwG": {
                "w": 756,
                "h": 609
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1524,
                "h": 1910
            },
            "scale": "0.35"
        }
    },
    "rfKyF": {
        "frames": [{
            "rfGvB": "rfKzG.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 488,
                "h": 577
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 488,
                "h": 577
            },
            "rfGwG": {
                "w": 488,
                "h": 577
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKzF.png",
            "frame": {
                "x": 1,
                "y": 580,
                "w": 443,
                "h": 292
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 443,
                "h": 292
            },
            "rfGwG": {
                "w": 443,
                "h": 292
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKzD.png",
            "frame": {
                "x": 1,
                "y": 1165,
                "w": 443,
                "h": 276
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 443,
                "h": 276
            },
            "rfGwG": {
                "w": 443,
                "h": 276
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxJ.png",
            "frame": {
                "x": 1,
                "y": 1756,
                "w": 414,
                "h": 244
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 414,
                "h": 244
            },
            "rfGwG": {
                "w": 414,
                "h": 244
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJqG.png",
            "frame": {
                "x": 1,
                "y": 874,
                "w": 443,
                "h": 289
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 443,
                "h": 289
            },
            "rfGwG": {
                "w": 443,
                "h": 289
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJqC.png",
            "frame": {
                "x": 1,
                "y": 1443,
                "w": 435,
                "h": 311
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 435,
                "h": 311
            },
            "rfGwG": {
                "w": 435,
                "h": 312
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 490,
                "h": 2001
            },
            "scale": "0.55"
        }
    },
    "rfKyC": {
        "frames": [{
            "rfGvB": "rfKyD.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 480,
                "h": 488
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 488
            },
            "rfGwG": {
                "w": 481,
                "h": 488
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKzC.png",
            "frame": {
                "x": 1374,
                "y": 1,
                "w": 419,
                "h": 276
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 419,
                "h": 276
            },
            "rfGwG": {
                "w": 419,
                "h": 276
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJqE.png",
            "frame": {
                "x": 929,
                "y": 1,
                "w": 443,
                "h": 277
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 1,
                "w": 443,
                "h": 277
            },
            "rfGwG": {
                "w": 443,
                "h": 278
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJqA.png",
            "frame": {
                "x": 483,
                "y": 1,
                "w": 444,
                "h": 301
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 444,
                "h": 301
            },
            "rfGwG": {
                "w": 444,
                "h": 313
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1794,
                "h": 490
            },
            "scale": "0.55"
        }
    },
    "rfJqK": {
        "frames": [{
            "rfGvB": "rfKzB.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 443,
                "h": 280
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 1,
                "w": 443,
                "h": 280
            },
            "rfGwG": {
                "w": 443,
                "h": 281
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJqD.png",
            "frame": {
                "x": 1,
                "y": 283,
                "w": 443,
                "h": 275
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 443,
                "h": 275
            },
            "rfGwG": {
                "w": 443,
                "h": 276
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJrK.png",
            "frame": {
                "x": 1,
                "y": 560,
                "w": 434,
                "h": 321
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 434,
                "h": 321
            },
            "rfGwG": {
                "w": 434,
                "h": 322
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 445,
                "h": 882
            },
            "scale": "0.55"
        }
    },
    "rfJqJ": {
        "frames": [{
            "rfGvB": "rfKyA.png",
            "frame": {
                "x": 491,
                "y": 1,
                "w": 408,
                "h": 320
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 408,
                "h": 320
            },
            "rfGwG": {
                "w": 408,
                "h": 320
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKzK.png",
            "frame": {
                "x": 901,
                "y": 1,
                "w": 437,
                "h": 314
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 437,
                "h": 314
            },
            "rfGwG": {
                "w": 437,
                "h": 314
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKzJ.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 488,
                "h": 577
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 488,
                "h": 577
            },
            "rfGwG": {
                "w": 488,
                "h": 577
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKzE.png",
            "frame": {
                "x": 1340,
                "y": 313,
                "w": 411,
                "h": 284
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 411,
                "h": 284
            },
            "rfGwG": {
                "w": 411,
                "h": 284
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJqF.png",
            "frame": {
                "x": 491,
                "y": 323,
                "w": 443,
                "h": 269
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 443,
                "h": 269
            },
            "rfGwG": {
                "w": 443,
                "h": 270
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJqB.png",
            "frame": {
                "x": 1340,
                "y": 1,
                "w": 437,
                "h": 310
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 437,
                "h": 310
            },
            "rfGwG": {
                "w": 437,
                "h": 310
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1778,
                "h": 598
            },
            "scale": "0.55"
        }
    },
    "rfJwG": {
        "frames": [{
            "rfGvB": "rfKwF.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 74,
                "h": 79
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 74,
                "h": 79
            },
            "rfGwG": {
                "w": 74,
                "h": 79
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwE.png",
            "frame": {
                "x": 77,
                "y": 1,
                "w": 42,
                "h": 43
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 42,
                "h": 43
            },
            "rfGwG": {
                "w": 42,
                "h": 43
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxH.png",
            "frame": {
                "x": 77,
                "y": 46,
                "w": 34,
                "h": 34
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 34,
                "h": 34
            },
            "rfGwG": {
                "w": 34,
                "h": 34
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 120,
                "h": 81
            },
            "scale": "0.55"
        }
    },
    "rfJyA": {
        "frames": [{
            "rfGvB": "rfOqG.png",
            "frame": {
                "x": 1,
                "y": 1026,
                "w": 419,
                "h": 89
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 419,
                "h": 89
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOqF.png",
            "frame": {
                "x": 1,
                "y": 1117,
                "w": 415,
                "h": 86
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 415,
                "h": 86
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOsK.png",
            "frame": {
                "x": 412,
                "y": 1211,
                "w": 88,
                "h": 87
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 88,
                "h": 87
            },
            "rfGwG": {
                "w": 88,
                "h": 87
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxG.png",
            "frame": {
                "x": 453,
                "y": 1300,
                "w": 84,
                "h": 84
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 84,
                "h": 84
            },
            "rfGwG": {
                "w": 88,
                "h": 87
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOvC.png",
            "frame": {
                "x": 422,
                "y": 1026,
                "w": 97,
                "h": 91
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 97,
                "h": 91
            },
            "rfGwG": {
                "w": 97,
                "h": 91
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOvB.png",
            "frame": {
                "x": 150,
                "y": 1205,
                "w": 141,
                "h": 121
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 141,
                "h": 121
            },
            "rfGwG": {
                "w": 141,
                "h": 121
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOvA.png",
            "frame": {
                "x": 357,
                "y": 1315,
                "w": 94,
                "h": 78
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 94,
                "h": 78
            },
            "rfGwG": {
                "w": 94,
                "h": 78
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOwK.png",
            "frame": {
                "x": 293,
                "y": 1205,
                "w": 117,
                "h": 108
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 117,
                "h": 108
            },
            "rfGwG": {
                "w": 117,
                "h": 108
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOwJ.png",
            "frame": {
                "x": 1,
                "y": 1205,
                "w": 147,
                "h": 122
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 147,
                "h": 122
            },
            "rfGwG": {
                "w": 147,
                "h": 122
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOwH.png",
            "frame": {
                "x": 418,
                "y": 1119,
                "w": 91,
                "h": 90
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 91,
                "h": 90
            },
            "rfGwG": {
                "w": 91,
                "h": 90
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOwG.png",
            "frame": {
                "x": 1,
                "y": 1329,
                "w": 62,
                "h": 63
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 62,
                "h": 63
            },
            "rfGwG": {
                "w": 62,
                "h": 63
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOwF.png",
            "frame": {
                "x": 65,
                "y": 1329,
                "w": 62,
                "h": 63
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 62,
                "h": 63
            },
            "rfGwG": {
                "w": 62,
                "h": 63
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNwA.png",
            "frame": {
                "x": 177,
                "y": 1328,
                "w": 50,
                "h": 41
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 50,
                "h": 41
            },
            "rfGwG": {
                "w": 50,
                "h": 41
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfLwF.png",
            "frame": {
                "x": 521,
                "y": 1026,
                "w": 9,
                "h": 17
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 9,
                "h": 17
            },
            "rfGwG": {
                "w": 9,
                "h": 17
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKxK.png",
            "frame": {
                "x": 293,
                "y": 1315,
                "w": 62,
                "h": 79
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 62,
                "h": 79
            },
            "rfGwG": {
                "w": 62,
                "h": 79
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJrJ.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 549,
                "h": 1023
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 549,
                "h": 1023
            },
            "rfGwG": {
                "w": 549,
                "h": 1023
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwD.png",
            "frame": {
                "x": 129,
                "y": 1329,
                "w": 46,
                "h": 53
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 46,
                "h": 53
            },
            "rfGwG": {
                "w": 46,
                "h": 53
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxF.png",
            "frame": {
                "x": 229,
                "y": 1328,
                "w": 35,
                "h": 41
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 35,
                "h": 41
            },
            "rfGwG": {
                "w": 35,
                "h": 41
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxE.png",
            "frame": {
                "x": 129,
                "y": 1329,
                "w": 46,
                "h": 53
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 46,
                "h": 53
            },
            "rfGwG": {
                "w": 46,
                "h": 53
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 551,
                "h": 1395
            },
            "scale": "0.55"
        }
    },
    "rfJzH": {
        "frames": [{
            "rfGvB": "rfHuA.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 419,
                "h": 89
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 419,
                "h": 89
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHvK.png",
            "frame": {
                "x": 422,
                "y": 1,
                "w": 415,
                "h": 86
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 415,
                "h": 86
            },
            "rfGwG": {
                "w": 419,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrE.png",
            "frame": {
                "x": 839,
                "y": 1,
                "w": 115,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 115,
                "h": 111
            },
            "rfGwG": {
                "w": 115,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrD.png",
            "frame": {
                "x": 956,
                "y": 1,
                "w": 111,
                "h": 108
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 111,
                "h": 108
            },
            "rfGwG": {
                "w": 115,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOrA.png",
            "frame": {
                "x": 1069,
                "y": 1,
                "w": 87,
                "h": 87
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 87,
                "h": 87
            },
            "rfGwG": {
                "w": 87,
                "h": 87
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxD.png",
            "frame": {
                "x": 1158,
                "y": 1,
                "w": 83,
                "h": 84
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 2,
                "y": 0,
                "w": 83,
                "h": 84
            },
            "rfGwG": {
                "w": 87,
                "h": 87
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOsE.png",
            "frame": {
                "x": 1411,
                "y": 1,
                "w": 75,
                "h": 94
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 75,
                "h": 94
            },
            "rfGwG": {
                "w": 75,
                "h": 94
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOsD.png",
            "frame": {
                "x": 1243,
                "y": 1,
                "w": 82,
                "h": 82
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 82,
                "h": 82
            },
            "rfGwG": {
                "w": 82,
                "h": 82
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOsC.png",
            "frame": {
                "x": 1488,
                "y": 1,
                "w": 75,
                "h": 89
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 75,
                "h": 89
            },
            "rfGwG": {
                "w": 75,
                "h": 89
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOsB.png",
            "frame": {
                "x": 1327,
                "y": 1,
                "w": 82,
                "h": 82
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 82,
                "h": 82
            },
            "rfGwG": {
                "w": 82,
                "h": 82
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfOsA.png",
            "frame": {
                "x": 1565,
                "y": 1,
                "w": 74,
                "h": 95
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 74,
                "h": 95
            },
            "rfGwG": {
                "w": 74,
                "h": 95
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNwK.png",
            "frame": {
                "x": 1763,
                "y": 70,
                "w": 57,
                "h": 39
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 57,
                "h": 39
            },
            "rfGwG": {
                "w": 57,
                "h": 39
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNwH.png",
            "frame": {
                "x": 1707,
                "y": 1,
                "w": 58,
                "h": 43
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 58,
                "h": 43
            },
            "rfGwG": {
                "w": 58,
                "h": 43
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfLvG.png",
            "frame": {
                "x": 422,
                "y": 89,
                "w": 9,
                "h": 17
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 9,
                "h": 17
            },
            "rfGwG": {
                "w": 9,
                "h": 17
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfLvD.png",
            "frame": {
                "x": 433,
                "y": 89,
                "w": 9,
                "h": 16
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 9,
                "h": 16
            },
            "rfGwG": {
                "w": 9,
                "h": 16
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKwJ.png",
            "frame": {
                "x": 1641,
                "y": 1,
                "w": 64,
                "h": 92
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 64,
                "h": 92
            },
            "rfGwG": {
                "w": 64,
                "h": 92
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwF.png",
            "frame": {
                "x": 1767,
                "y": 1,
                "w": 57,
                "h": 67
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 57,
                "h": 67
            },
            "rfGwG": {
                "w": 57,
                "h": 67
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxC.png",
            "frame": {
                "x": 1826,
                "y": 1,
                "w": 39,
                "h": 46
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 39,
                "h": 46
            },
            "rfGwG": {
                "w": 39,
                "h": 46
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxB.png",
            "frame": {
                "x": 1822,
                "y": 70,
                "w": 45,
                "h": 40
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 45,
                "h": 40
            },
            "rfGwG": {
                "w": 45,
                "h": 40
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNxA.png",
            "frame": {
                "x": 1707,
                "y": 46,
                "w": 54,
                "h": 48
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 54,
                "h": 48
            },
            "rfGwG": {
                "w": 54,
                "h": 48
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyK.png",
            "frame": {
                "x": 1767,
                "y": 1,
                "w": 57,
                "h": 67
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 57,
                "h": 67
            },
            "rfGwG": {
                "w": 57,
                "h": 67
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIvD.png",
            "frame": {
                "x": 1822,
                "y": 70,
                "w": 45,
                "h": 40
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 45,
                "h": 40
            },
            "rfGwG": {
                "w": 45,
                "h": 40
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIvC.png",
            "frame": {
                "x": 1707,
                "y": 46,
                "w": 54,
                "h": 48
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 54,
                "h": 48
            },
            "rfGwG": {
                "w": 54,
                "h": 48
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1868,
                "h": 113
            },
            "scale": "0.55"
        }
    },
    "rfHrD": {
        "frames": [{
            "rfGvB": "rfjxe.png",
            "frame": {
                "x": 1331,
                "y": 735,
                "w": 82,
                "h": 82
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 82,
                "h": 82
            },
            "rfGwG": {
                "w": 82,
                "h": 82
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfPxG.png",
            "frame": {
                "x": 1415,
                "y": 619,
                "w": 180,
                "h": 186
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 186
            },
            "rfGwG": {
                "w": 180,
                "h": 186
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyJ.png",
            "frame": {
                "x": 1,
                "y": 832,
                "w": 354,
                "h": 482
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 354,
                "h": 482
            },
            "rfGwG": {
                "w": 354,
                "h": 482
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyH.png",
            "frame": {
                "x": 1609,
                "y": 1,
                "w": 356,
                "h": 294
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 356,
                "h": 294
            },
            "rfGwG": {
                "w": 356,
                "h": 294
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyG.png",
            "frame": {
                "x": 1609,
                "y": 735,
                "w": 356,
                "h": 243
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 356,
                "h": 243
            },
            "rfGwG": {
                "w": 356,
                "h": 243
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyF.png",
            "frame": {
                "x": 1264,
                "y": 1166,
                "w": 343,
                "h": 262
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 343,
                "h": 262
            },
            "rfGwG": {
                "w": 343,
                "h": 262
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyE.png",
            "frame": {
                "x": 1135,
                "y": 824,
                "w": 356,
                "h": 340
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 356,
                "h": 340
            },
            "rfGwG": {
                "w": 356,
                "h": 340
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfPxC.png",
            "frame": {
                "x": 1,
                "y": 1316,
                "w": 354,
                "h": 91
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 354,
                "h": 91
            },
            "rfGwG": {
                "w": 354,
                "h": 91
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfPxB.png",
            "frame": {
                "x": 849,
                "y": 752,
                "w": 354,
                "h": 70
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 354,
                "h": 70
            },
            "rfGwG": {
                "w": 354,
                "h": 70
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfPxA.png",
            "frame": {
                "x": 1609,
                "y": 980,
                "w": 356,
                "h": 135
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 356,
                "h": 135
            },
            "rfGwG": {
                "w": 356,
                "h": 135
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNwF.png",
            "frame": {
                "x": 1193,
                "y": 1166,
                "w": 67,
                "h": 53
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 67,
                "h": 53
            },
            "rfGwG": {
                "w": 67,
                "h": 53
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNwE.png",
            "frame": {
                "x": 1277,
                "y": 752,
                "w": 45,
                "h": 59
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 45,
                "h": 59
            },
            "rfGwG": {
                "w": 45,
                "h": 59
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfNwB.png",
            "frame": {
                "x": 1205,
                "y": 752,
                "w": 70,
                "h": 59
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 70,
                "h": 59
            },
            "rfGwG": {
                "w": 70,
                "h": 59
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfKwC.png",
            "frame": {
                "x": 630,
                "y": 752,
                "w": 65,
                "h": 75
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 65,
                "h": 75
            },
            "rfGwG": {
                "w": 65,
                "h": 75
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJrH.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 549,
                "h": 829
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 549,
                "h": 829
            },
            "rfGwG": {
                "w": 549,
                "h": 829
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJsD.png",
            "frame": {
                "x": 1,
                "y": 1409,
                "w": 26,
                "h": 26
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 26,
                "h": 26
            },
            "rfGwG": {
                "w": 26,
                "h": 26
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJwD.png",
            "frame": {
                "x": 552,
                "y": 1,
                "w": 529,
                "h": 749
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 529,
                "h": 749
            },
            "rfGwG": {
                "w": 529,
                "h": 749
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfJwC.png",
            "frame": {
                "x": 875,
                "y": 1225,
                "w": 387,
                "h": 210
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 387,
                "h": 210
            },
            "rfGwG": {
                "w": 387,
                "h": 210
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyC.png",
            "frame": {
                "x": 1083,
                "y": 619,
                "w": 246,
                "h": 131
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 246,
                "h": 131
            },
            "rfGwG": {
                "w": 246,
                "h": 131
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyB.png",
            "frame": {
                "x": 775,
                "y": 752,
                "w": 72,
                "h": 72
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 0,
                "y": 69,
                "w": 72,
                "h": 72
            },
            "rfGwG": {
                "w": 206,
                "h": 141
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHvC.png",
            "frame": {
                "x": 1601,
                "y": 297,
                "w": 387,
                "h": 279
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 387,
                "h": 279
            },
            "rfGwG": {
                "w": 387,
                "h": 279
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHyF.png",
            "frame": {
                "x": 357,
                "y": 1231,
                "w": 516,
                "h": 204
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 516,
                "h": 204
            },
            "rfGwG": {
                "w": 516,
                "h": 204
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyA.png",
            "frame": {
                "x": 1601,
                "y": 578,
                "w": 387,
                "h": 155
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 387,
                "h": 155
            },
            "rfGwG": {
                "w": 387,
                "h": 155
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNzK.png",
            "frame": {
                "x": 1083,
                "y": 1,
                "w": 516,
                "h": 204
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 516,
                "h": 204
            },
            "rfGwG": {
                "w": 516,
                "h": 204
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNzJ.png",
            "frame": {
                "x": 1609,
                "y": 1117,
                "w": 131,
                "h": 246
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 131,
                "h": 246
            },
            "rfGwG": {
                "w": 131,
                "h": 246
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNzH.png",
            "frame": {
                "x": 552,
                "y": 752,
                "w": 76,
                "h": 75
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 65,
                "y": 0,
                "w": 76,
                "h": 75
            },
            "rfGwG": {
                "w": 206,
                "h": 141
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHwG.png",
            "frame": {
                "x": 357,
                "y": 832,
                "w": 387,
                "h": 397
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 387,
                "h": 397
            },
            "rfGwG": {
                "w": 387,
                "h": 397
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHyH.png",
            "frame": {
                "x": 1083,
                "y": 207,
                "w": 516,
                "h": 204
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 516,
                "h": 204
            },
            "rfGwG": {
                "w": 516,
                "h": 204
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNzG.png",
            "frame": {
                "x": 1742,
                "y": 1117,
                "w": 131,
                "h": 246
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 131,
                "h": 246
            },
            "rfGwG": {
                "w": 131,
                "h": 246
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNzF.png",
            "frame": {
                "x": 697,
                "y": 752,
                "w": 76,
                "h": 72
            },
            "rfGwK": false,
            "rfGwJ": true,
            "rfGwH": {
                "x": 65,
                "y": 69,
                "w": 76,
                "h": 72
            },
            "rfGwG": {
                "w": 206,
                "h": 141
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHwD.png",
            "frame": {
                "x": 746,
                "y": 826,
                "w": 387,
                "h": 397
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 387,
                "h": 397
            },
            "rfGwG": {
                "w": 387,
                "h": 397
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfHyK.png",
            "frame": {
                "x": 1083,
                "y": 413,
                "w": 516,
                "h": 204
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 516,
                "h": 204
            },
            "rfGwG": {
                "w": 516,
                "h": 204
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "reNyD.png",
            "frame": {
                "x": 1135,
                "y": 1166,
                "w": 56,
                "h": 56
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 56,
                "h": 56
            },
            "rfGwG": {
                "w": 56,
                "h": 56
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "rfIwH.png",
            "frame": {
                "x": 1135,
                "y": 1166,
                "w": 56,
                "h": 56
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 56,
                "h": 56
            },
            "rfGwG": {
                "w": 56,
                "h": 56
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1989,
                "h": 1436
            },
            "scale": "0.55"
        }
    },
    "gameVars": {
        "test1": 666,
        "rfGrD": {
            "rfLtE": 750,
            "rfIrC": 500,
            "rfKtE": 100,
            "rfKrC": 1500
        },
        "rfGrC": {
            "rfGrA": 5000,
            "rfGsK": 1,
            "rfGsJ": 5000,
            "rfGsH": 2000
        },
        "rfGrB": {
            "rfGrA": 10000,
            "rfGsK": 2,
            "rfGsJ": 10000,
            "rfGsH": 4000
        }
    },
    "REOWF": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 378,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 755,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 1,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 378,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 755,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 378,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 755,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 1,
                "y": 997,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 378,
                "y": 997,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 755,
                "y": 997,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 1,
                "y": 1329,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 378,
                "y": 1329,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 755,
                "y": 1329,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 1,
                "y": 1661,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 378,
                "y": 1661,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1131,
                "h": 1992
            },
            "scale": "0.5"
        }
    },
    "REOWG": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 378,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 755,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 1132,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 1,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 378,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 755,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1132,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 378,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 755,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 1132,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1508,
                "h": 996
            },
            "scale": "0.5"
        }
    },
    "REOWH": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 378,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 755,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 1132,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 1,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 378,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 755,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1132,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1508,
                "h": 664
            },
            "scale": "0.5"
        }
    },
    "REOWC": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 378,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 755,
                "y": 1,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 1,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 378,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 755,
                "y": 333,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 378,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 755,
                "y": 665,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1,
                "y": 997,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 378,
                "y": 997,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 755,
                "y": 997,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 1,
                "y": 1329,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 378,
                "y": 1329,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 755,
                "y": 1329,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 1,
                "y": 1661,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 378,
                "y": 1661,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 755,
                "y": 1661,
                "w": 375,
                "h": 330
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 375,
                "h": 330
            },
            "rfGwG": {
                "w": 375,
                "h": 330
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1131,
                "h": 1992
            },
            "scale": "0.5"
        }
    },
    "REOVK": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 1,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 1,
                "y": 601,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 1,
                "y": 801,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 227,
                "h": 1000
            },
            "scale": "0.5"
        }
    },
    "reoqf": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 1,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 1,
                "y": 601,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 1,
                "y": 801,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 1,
                "y": 1001,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 1201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1,
                "y": 1401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1,
                "y": 1601,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1,
                "y": 1801,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 227,
                "h": 2000
            },
            "scale": "0.5"
        }
    },
    "reoqg": {
        "frames": [{
            "rfGvB": "JUMPend_10.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "JUMPend_11.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "JUMPend_12.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "JUMPend_13.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "JUMPend_14.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "JUMPend_15.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "JUMPend_16.png",
            "frame": {
                "x": 1363,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1589,
                "h": 200
            },
            "scale": "0.5"
        }
    },
    "RFHWB": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 228,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 1,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 228,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 601,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 228,
                "y": 601,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1,
                "y": 801,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 228,
                "y": 801,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 1,
                "y": 1001,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 228,
                "y": 1001,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 1,
                "y": 1201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 228,
                "y": 1201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 1,
                "y": 1401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 228,
                "y": 1401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 1,
                "y": 1601,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 228,
                "y": 1601,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 1,
                "y": 1801,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 228,
                "y": 1801,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 454,
                "h": 2000
            },
            "scale": "0.5"
        }
    },
    "REOVJ": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1363,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1590,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1817,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 228,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 455,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 682,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 909,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 1136,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 1363,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 1590,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 1817,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 2043,
                "h": 400
            },
            "scale": "0.5"
        }
    },
    "REPVC": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 1,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 1,
                "y": 601,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 1,
                "y": 801,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 1,
                "y": 1001,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 1201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1,
                "y": 1401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1,
                "y": 1601,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1,
                "y": 1801,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 227,
                "h": 2000
            },
            "scale": "0.5"
        }
    },
    "REORK": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1363,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1590,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 228,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 455,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 682,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 909,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 1136,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 1363,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 1590,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 1,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 228,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 455,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 682,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 909,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "21.png",
            "frame": {
                "x": 1136,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1816,
                "h": 600
            },
            "scale": "0.5"
        }
    },
    "REOXK": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 183,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 365,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 547,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 729,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 911,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1093,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1275,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1457,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1639,
                "y": 1,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 1,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 183,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 365,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 547,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 729,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 911,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 1093,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 1275,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 1457,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 1639,
                "y": 183,
                "w": 180,
                "h": 180
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 180
            },
            "rfGwG": {
                "w": 180,
                "h": 180
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1820,
                "h": 364
            },
            "scale": "0.5"
        }
    },
    "rfOsF": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 114,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 227,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 340,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 453,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 566,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 679,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 792,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 905,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1018,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 1131,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 1244,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 1357,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 1,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 114,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 227,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 340,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 453,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 566,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 679,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 792,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "21.png",
            "frame": {
                "x": 905,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "22.png",
            "frame": {
                "x": 1018,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "23.png",
            "frame": {
                "x": 1131,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "24.png",
            "frame": {
                "x": 1244,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "25.png",
            "frame": {
                "x": 1357,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "26.png",
            "frame": {
                "x": 1,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "27.png",
            "frame": {
                "x": 114,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "28.png",
            "frame": {
                "x": 227,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "29.png",
            "frame": {
                "x": 340,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "30.png",
            "frame": {
                "x": 453,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "31.png",
            "frame": {
                "x": 566,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "32.png",
            "frame": {
                "x": 679,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "33.png",
            "frame": {
                "x": 792,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "34.png",
            "frame": {
                "x": 905,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "35.png",
            "frame": {
                "x": 1018,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "36.png",
            "frame": {
                "x": 1131,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "37.png",
            "frame": {
                "x": 1244,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1469,
                "h": 339
            },
            "scale": "0.5"
        }
    },
    "rfGtF": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 114,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 227,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 340,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 453,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 566,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 679,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 792,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 905,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1018,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 1131,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 1244,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 1357,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 1,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 114,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 227,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 340,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 453,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 566,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 679,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 792,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "21.png",
            "frame": {
                "x": 905,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "22.png",
            "frame": {
                "x": 1018,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "23.png",
            "frame": {
                "x": 1131,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "24.png",
            "frame": {
                "x": 1244,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "25.png",
            "frame": {
                "x": 1357,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "26.png",
            "frame": {
                "x": 1,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "27.png",
            "frame": {
                "x": 114,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "28.png",
            "frame": {
                "x": 227,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "29.png",
            "frame": {
                "x": 340,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "30.png",
            "frame": {
                "x": 453,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "31.png",
            "frame": {
                "x": 566,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "32.png",
            "frame": {
                "x": 679,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "33.png",
            "frame": {
                "x": 792,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "34.png",
            "frame": {
                "x": 905,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "35.png",
            "frame": {
                "x": 1018,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "36.png",
            "frame": {
                "x": 1131,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "37.png",
            "frame": {
                "x": 1244,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1469,
                "h": 339
            },
            "scale": "0.5"
        }
    },
    "rfLtE": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 188,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 375,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 562,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 749,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 936,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1123,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1310,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1497,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1684,
                "y": 1,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 1,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 188,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 375,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 562,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 749,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 936,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 1123,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 1310,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 1497,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 1684,
                "y": 188,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 1,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "21.png",
            "frame": {
                "x": 188,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "22.png",
            "frame": {
                "x": 375,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "23.png",
            "frame": {
                "x": 562,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "24.png",
            "frame": {
                "x": 749,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "25.png",
            "frame": {
                "x": 936,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "26.png",
            "frame": {
                "x": 1123,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "27.png",
            "frame": {
                "x": 1310,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "28.png",
            "frame": {
                "x": 1497,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "29.png",
            "frame": {
                "x": 1684,
                "y": 375,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "30.png",
            "frame": {
                "x": 1,
                "y": 562,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "31.png",
            "frame": {
                "x": 188,
                "y": 562,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "32.png",
            "frame": {
                "x": 375,
                "y": 562,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "33.png",
            "frame": {
                "x": 562,
                "y": 562,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "34.png",
            "frame": {
                "x": 749,
                "y": 562,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "35.png",
            "frame": {
                "x": 936,
                "y": 562,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "36.png",
            "frame": {
                "x": 1123,
                "y": 562,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "37.png",
            "frame": {
                "x": 1310,
                "y": 562,
                "w": 185,
                "h": 185
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 185,
                "h": 185
            },
            "rfGwG": {
                "w": 185,
                "h": 185
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1870,
                "h": 748
            },
            "scale": "0.5"
        }
    },
    "reOqE": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 114,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 227,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 340,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 453,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 566,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 679,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 792,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 905,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1018,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 1131,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 1244,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 1357,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 1,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 114,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 227,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 340,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 453,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 566,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 679,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 792,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "21.png",
            "frame": {
                "x": 905,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "22.png",
            "frame": {
                "x": 1018,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "23.png",
            "frame": {
                "x": 1131,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "24.png",
            "frame": {
                "x": 1244,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "25.png",
            "frame": {
                "x": 1357,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "26.png",
            "frame": {
                "x": 1,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "27.png",
            "frame": {
                "x": 114,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "28.png",
            "frame": {
                "x": 227,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "29.png",
            "frame": {
                "x": 340,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "30.png",
            "frame": {
                "x": 453,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "31.png",
            "frame": {
                "x": 566,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "32.png",
            "frame": {
                "x": 679,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "33.png",
            "frame": {
                "x": 792,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "34.png",
            "frame": {
                "x": 905,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "35.png",
            "frame": {
                "x": 1018,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "36.png",
            "frame": {
                "x": 1131,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "37.png",
            "frame": {
                "x": 1244,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1469,
                "h": 339
            },
            "scale": "0.5"
        }
    },
    "rfKtE": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 114,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 227,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 340,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 453,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 566,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 679,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 792,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 905,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1018,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 1131,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 1244,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 1357,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 1,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 114,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 227,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 340,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 453,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 566,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 679,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 792,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "21.png",
            "frame": {
                "x": 905,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "22.png",
            "frame": {
                "x": 1018,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "23.png",
            "frame": {
                "x": 1131,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "24.png",
            "frame": {
                "x": 1244,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "25.png",
            "frame": {
                "x": 1357,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "26.png",
            "frame": {
                "x": 1,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "27.png",
            "frame": {
                "x": 114,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "28.png",
            "frame": {
                "x": 227,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "29.png",
            "frame": {
                "x": 340,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "30.png",
            "frame": {
                "x": 453,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "31.png",
            "frame": {
                "x": 566,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "32.png",
            "frame": {
                "x": 679,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "33.png",
            "frame": {
                "x": 792,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "34.png",
            "frame": {
                "x": 905,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "35.png",
            "frame": {
                "x": 1018,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "36.png",
            "frame": {
                "x": 1131,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "37.png",
            "frame": {
                "x": 1244,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1469,
                "h": 339
            },
            "scale": "0.5"
        }
    },
    "rfItA": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 114,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 227,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 340,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 453,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 566,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 679,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 792,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 905,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1018,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 1131,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 1244,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 1357,
                "y": 1,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 1,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 114,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 227,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 340,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 453,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 566,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 679,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 792,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "21.png",
            "frame": {
                "x": 905,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "22.png",
            "frame": {
                "x": 1018,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "23.png",
            "frame": {
                "x": 1131,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "24.png",
            "frame": {
                "x": 1244,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "25.png",
            "frame": {
                "x": 1357,
                "y": 114,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "26.png",
            "frame": {
                "x": 1,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "27.png",
            "frame": {
                "x": 114,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "28.png",
            "frame": {
                "x": 227,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "29.png",
            "frame": {
                "x": 340,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "30.png",
            "frame": {
                "x": 453,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "31.png",
            "frame": {
                "x": 566,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "32.png",
            "frame": {
                "x": 679,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "33.png",
            "frame": {
                "x": 792,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "34.png",
            "frame": {
                "x": 905,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "35.png",
            "frame": {
                "x": 1018,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "36.png",
            "frame": {
                "x": 1131,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "37.png",
            "frame": {
                "x": 1244,
                "y": 227,
                "w": 111,
                "h": 111
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 111,
                "h": 111
            },
            "rfGwG": {
                "w": 111,
                "h": 111
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1469,
                "h": 339
            },
            "scale": "0.5"
        }
    },
    "rePyF": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 183,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 365,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 547,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 729,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 911,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 183,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 365,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 547,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 729,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 911,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1092,
                "h": 388
            },
            "scale": "0.5"
        }
    },
    "rePyD": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 183,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 365,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 547,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 729,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 911,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 183,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 365,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 547,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 729,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 911,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1092,
                "h": 368
            },
            "scale": "0.5"
        }
    },
    "rePyB": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 183,
                "y": 1,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 365,
                "y": 1,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 547,
                "y": 1,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 729,
                "y": 1,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 911,
                "y": 1,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 181,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 183,
                "y": 181,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 365,
                "y": 181,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 547,
                "y": 181,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 729,
                "y": 181,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 911,
                "y": 181,
                "w": 180,
                "h": 178
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 178
            },
            "rfGwG": {
                "w": 180,
                "h": 178
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1092,
                "h": 360
            },
            "scale": "0.5"
        }
    },
    "rePzK": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 183,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 365,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 547,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 729,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 911,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 183,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 365,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 547,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 729,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 911,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1092,
                "h": 350
            },
            "scale": "0.5"
        }
    },
    "reovd": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1362,
                "h": 200
            },
            "scale": "0.5"
        }
    },
    "reove": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 228,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 455,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 682,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 909,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 1136,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1362,
                "h": 400
            },
            "scale": "0.5"
        }
    },
    "rePyE": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 183,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 365,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 547,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 729,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 911,
                "y": 1,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 183,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 365,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 547,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 729,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 911,
                "y": 195,
                "w": 180,
                "h": 192
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 192
            },
            "rfGwG": {
                "w": 180,
                "h": 192
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1092,
                "h": 388
            },
            "scale": "0.5"
        }
    },
    "rePyC": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 183,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 365,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 547,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 729,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 911,
                "y": 1,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 183,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 365,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 547,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 729,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 911,
                "y": 185,
                "w": 180,
                "h": 182
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 182
            },
            "rfGwG": {
                "w": 180,
                "h": 182
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1092,
                "h": 368
            },
            "scale": "0.5"
        }
    },
    "rePyA": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 183,
                "y": 1,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 365,
                "y": 1,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 547,
                "y": 1,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 729,
                "y": 1,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 911,
                "y": 1,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 182,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 183,
                "y": 182,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 365,
                "y": 182,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 547,
                "y": 182,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 729,
                "y": 182,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 911,
                "y": 182,
                "w": 180,
                "h": 179
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 179
            },
            "rfGwG": {
                "w": 180,
                "h": 179
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1092,
                "h": 362
            },
            "scale": "0.5"
        }
    },
    "rePzJ": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 183,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 365,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 547,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 729,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 911,
                "y": 1,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 183,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 365,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 547,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 729,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 911,
                "y": 176,
                "w": 180,
                "h": 173
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 180,
                "h": 173
            },
            "rfGwG": {
                "w": 180,
                "h": 173
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1092,
                "h": 350
            },
            "scale": "0.5"
        }
    },
    "reoyj": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1363,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1590,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1817,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 228,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 455,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 682,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 909,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 1136,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 1363,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 1590,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 1817,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 2043,
                "h": 400
            },
            "scale": "0.5"
        }
    },
    "reoyk": {
        "frames": [{
            "rfGvB": "18.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "21.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "22.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "23.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "24.png",
            "frame": {
                "x": 1363,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "25.png",
            "frame": {
                "x": 1590,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "26.png",
            "frame": {
                "x": 1817,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "27.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "28.png",
            "frame": {
                "x": 228,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "29.png",
            "frame": {
                "x": 455,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "30.png",
            "frame": {
                "x": 682,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "31.png",
            "frame": {
                "x": 909,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "32.png",
            "frame": {
                "x": 1136,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "33.png",
            "frame": {
                "x": 1363,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "34.png",
            "frame": {
                "x": 1590,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "35.png",
            "frame": {
                "x": 1817,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 2043,
                "h": 400
            },
            "scale": "0.5"
        }
    },
    "reOrH": {
        "frames": [{
            "rfGvB": "00.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "01.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "02.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "03.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "04.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "05.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "06.png",
            "frame": {
                "x": 1363,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "07.png",
            "frame": {
                "x": 1590,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "08.png",
            "frame": {
                "x": 1,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "09.png",
            "frame": {
                "x": 228,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "10.png",
            "frame": {
                "x": 455,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "11.png",
            "frame": {
                "x": 682,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "12.png",
            "frame": {
                "x": 909,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "13.png",
            "frame": {
                "x": 1136,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "14.png",
            "frame": {
                "x": 1363,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "15.png",
            "frame": {
                "x": 1590,
                "y": 201,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "16.png",
            "frame": {
                "x": 1,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "17.png",
            "frame": {
                "x": 228,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "18.png",
            "frame": {
                "x": 455,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "19.png",
            "frame": {
                "x": 682,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "20.png",
            "frame": {
                "x": 909,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "21.png",
            "frame": {
                "x": 1136,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "22.png",
            "frame": {
                "x": 1363,
                "y": 401,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 1816,
                "h": 600
            },
            "scale": "0.5"
        }
    },
    "rePwB": {
        "frames": [{
            "rfGvB": "001.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "002.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "003.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "004.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "005.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "006.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "007.png",
            "frame": {
                "x": 1363,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "008.png",
            "frame": {
                "x": 1590,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "009.png",
            "frame": {
                "x": 1817,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 2043,
                "h": 200
            },
            "scale": "0.5"
        }
    },
    "rePwA": {
        "frames": [{
            "rfGvB": "001.png",
            "frame": {
                "x": 1,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "002.png",
            "frame": {
                "x": 228,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "003.png",
            "frame": {
                "x": 455,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "004.png",
            "frame": {
                "x": 682,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "005.png",
            "frame": {
                "x": 909,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "006.png",
            "frame": {
                "x": 1136,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "007.png",
            "frame": {
                "x": 1363,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "008.png",
            "frame": {
                "x": 1590,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }, {
            "rfGvB": "009.png",
            "frame": {
                "x": 1817,
                "y": 1,
                "w": 225,
                "h": 198
            },
            "rfGwK": false,
            "rfGwJ": false,
            "rfGwH": {
                "x": 0,
                "y": 0,
                "w": 225,
                "h": 198
            },
            "rfGwG": {
                "w": 225,
                "h": 198
            },
            "rfGwF": {
                "x": 0.5,
                "y": 0.5
            }
        }],
        "meta": {
            "size": {
                "w": 2043,
                "h": 200
            },
            "scale": "0.5"
        }
    },
    "rePsK": {
        "world1": {
            "rePsJ": ["0x702fab", "0x978be5", "0x9d70c5"],
            "rePsH": "0x6937a0",
            "rePsG": "0x783fb7",
            "rePsF": "0xd997ee",
            "rePsE": [],
            "rePsD": ["0xcbc0f8", "0x0e057f"],
            "rePsC": [],
            "backgroundImage": "reNsA.png",
            "rePsA": "reNtK.png",
            "rePtK": "reNtJ.png",
            "rePtJ": 20,
            "rePtH": [{
                "rePtG": "cube/cube",
                "position": {
                    "x": 0,
                    "y": -2,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 0.02,
                    "y": 0.02,
                    "z": 0.02
                }
            }, {
                "rePtG": "cube/cube",
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.0,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.008,
                    "y": 0.008,
                    "z": 0.008
                }
            }, {
                "rePtG": "cube/cube",
                "position": {
                    "x": 0,
                    "y": 1.5,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.0,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.005,
                    "y": 0.005,
                    "z": 0.005
                }
            }]
        },
        "world2": {
            "rePsJ": ["0xbc78d2", "0xa2631a"],
            "rePsH": "0xdc9720",
            "rePsG": "0xebbf6a",
            "rePsF": "0xffb82c",
            "rePsE": [],
            "rePsD": ["0xe4acf6", "0x7a5885"],
            "rePsC": [{
                "dist": 400,
                "image": "reNuE.png"
            }, {
                "dist": 300,
                "image": "reNuD.png"
            }, {
                "dist": 200,
                "image": "reNuC.png"
            }, {
                "dist": 100,
                "image": "reNvC.png"
            }],
            "backgroundImage": "reNtH.png",
            "rePsA": "reNtG.png",
            "rePtK": "reNtF.png",
            "rePtJ": 60,
            "rePtH": [{
                "rePtG": "bushBrown/bushBrown",
                "position": {
                    "x": 0,
                    "y": -0.2,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 0.02,
                    "y": 0.02,
                    "z": 0.02
                }
            }, {
                "rePtG": "baseBrown/baseBrown",
                "position": {
                    "x": 0,
                    "y": -2,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.0,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.015,
                    "y": 0.015,
                    "z": 0.015
                }
            }, {
                "rePtG": "treeBrown/treeBrown",
                "position": {
                    "x": 0,
                    "y": 1,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.0,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.015,
                    "y": 0.015,
                    "z": 0.015
                }
            }]
        },
        "world3": {
            "rePsJ": ["0x50b17d", "0x5e9f6d"],
            "rePsH": "0x95ab5f",
            "rePsG": "0xa6b97a",
            "rePsF": "0xa7d673",
            "rePsE": [],
            "rePsD": ["0x5ece92", "0x5d7b50"],
            "rePsC": [{
                "dist": 400,
                "image": "reNuB.png"
            }, {
                "dist": 300,
                "image": "reNuA.png"
            }, {
                "dist": 200,
                "image": "reNvK.png"
            }],
            "backgroundImage": "reNtE.png",
            "rePsA": "reNtD.png",
            "rePtK": "reNtC.png",
            "rePtJ": 60,
            "rePtH": [{
                "rePtG": "treeGreenOne/treeGreenOne",
                "position": {
                    "x": 0,
                    "y": -0.2,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 0.02,
                    "y": 0.02,
                    "z": 0.02
                }
            }, {
                "rePtG": "baseGreen/baseGreen",
                "position": {
                    "x": 0,
                    "y": -2,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.0,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.015,
                    "y": 0.015,
                    "z": 0.015
                }
            }, {
                "rePtG": "treeGreenTwo/treeGreenTwo",
                "position": {
                    "x": 0,
                    "y": 1,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.0,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.015,
                    "y": 0.015,
                    "z": 0.015
                }
            }]
        },
        "world4": {
            "rePsJ": ["0x2eb0d0", "0x78c3d5"],
            "rePsH": "0x35c5e3",
            "rePsG": "0x96dced",
            "rePsF": "0xa5e7e5",
            "rePsE": [],
            "rePsD": ["0xffffff", "0x177f98"],
            "rePsC": [{
                "dist": 400,
                "image": "reNvJ.png"
            }, {
                "dist": 300,
                "image": "reNvH.png"
            }, {
                "dist": 200,
                "image": "reNvG.png"
            }],
            "backgroundImage": "reNtB.png",
            "rePsA": "reNtA.png",
            "rePtK": "reNuK.png",
            "rePtJ": 60,
            "rePtH": [{
                "rePtG": "treeBlue/treeBlue",
                "position": {
                    "x": 0,
                    "y": -0.2,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 0.02,
                    "y": 0.02,
                    "z": 0.02
                }
            }, {
                "rePtG": "iceBlue/iceBlue",
                "position": {
                    "x": 0,
                    "y": -1,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.785,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.015,
                    "y": 0.015,
                    "z": 0.015
                }
            }, {
                "rePtG": "baseBlue/baseBlue",
                "position": {
                    "x": 0,
                    "y": -1.5,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.0,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.015,
                    "y": 0.015,
                    "z": 0.015
                }
            }]
        },
        "world5": {
            "rePsJ": ["0xfb977e", "0xe96659"],
            "rePsH": "0xfc7869",
            "rePsG": "0xff7d5b",
            "rePsF": "0xffc57d",
            "rePsE": [],
            "rePsD": ["0xffceb3", "0xb34b48"],
            "rePsC": [{
                "dist": 400,
                "image": "reNvF.png"
            }, {
                "dist": 300,
                "image": "reNvE.png"
            }, {
                "dist": 200,
                "image": "reNvD.png"
            }, {
                "dist": 100,
                "image": "reNvB.png"
            }],
            "backgroundImage": "reNuJ.png",
            "rePsA": "reNuH.png",
            "rePtK": "reNuG.png",
            "rePtJ": 60,
            "rePtH": [{
                "rePtG": "rockOne/rockOne",
                "position": {
                    "x": 0,
                    "y": -2,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 0.03,
                    "y": 0.03,
                    "z": 0.03
                }
            }, {
                "rePtG": "rockTwo/rockTwo",
                "position": {
                    "x": 0,
                    "y": -0.2,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.0,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.040,
                    "y": 0.040,
                    "z": 0.040
                }
            }, {
                "rePtG": "rockThree/rockThree",
                "position": {
                    "x": 0,
                    "y": 1,
                    "z": 0
                },
                "rfIqD": {
                    "x": 0,
                    "y": 0.0,
                    "z": 0.0
                },
                "scale": {
                    "x": 0.02,
                    "y": 0.02,
                    "z": 0.02
                }
            }]
        }
    },
    "rePyK": {
        "reOsD": {
            "name": "reOsD",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "reOwF",
                        "rfGvB": "REOWF"
                    }, {
                        "name": "reOwG",
                        "rfGvB": "REOWG"
                    }, {
                        "name": "reOwH",
                        "rfGvB": "REOWH"
                    }, {
                        "name": "reOwC",
                        "rfGvB": "REOWC"
                    }, {
                        "name": "reOqH",
                        "rfGvB": "reoqf"
                    }, {
                        "name": "reOqJ",
                        "rfGvB": "reoqg"
                    }, {
                        "name": "rfHwB",
                        "rfGvB": "RFHWB"
                    }, {
                        "name": "rfHxD",
                        "rfGvB": "REOVK"
                    }, {
                        "name": "reOvJ",
                        "rfGvB": "REOVJ"
                    }, {
                        "name": "rePvC",
                        "rfGvB": "REPVC"
                    }, {
                        "name": "reOrK",
                        "rfGvB": "REORK"
                    }, {
                        "name": "rePxF",
                        "rfGvB": "reovd"
                    }, {
                        "name": "rePxG",
                        "rfGvB": "reove"
                    }, {
                        "name": "reOxA",
                        "rfGvB": "reoyj"
                    }, {
                        "name": "reOxB",
                        "rfGvB": "reoyk"
                    }, {
                        "name": "reOrJ",
                        "rfGvB": "reOrH"
                    }, {
                        "name": "rePwD",
                        "rfGvB": "rePwB"
                    }, {
                        "name": "rePwC",
                        "rfGvB": "rePwA"
                    }]
                ]
            }, {
                "name": "reOsH"
            }, {
                "name": "reOwK"
            }, {
                "name": "rePxD",
                "rePuH": [3, 3]
            }, {
                "name": "reOtB"
            }, {
                "name": "reOuK"
            }, {
                "name": "reOuF"
            }, {
                "name": "reOuE"
            }, {
                "name": "reOuH"
            }, {
                "name": "reOtA"
            }, {
                "name": "reOuD"
            }, {
                "name": "reOsB"
            }, {
                "name": "reOxJ",
                "rePuH": [0.42, false]
            }, {
                "name": "rePvE"
            }, {
                "name": "rePvB"
            }, {
                "name": "rePwJ",
                "rePuH": [
                    ["rfGtC", "rfGtA", "rfGtB", "rfGuK", "rfGtG"]
                ]
            }, {
                "name": "reOtF"
            }, {
                "name": "reOtK"
            }, {
                "name": "reOqK"
            }, {
                "name": "reOtJ"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "reOtB",
                        "rePxK": "rfGxE",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "reOuF",
                        "rePxK": "rfGxD",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "reOsC",
                        "rePxK": "rfGxC",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "rfHxB",
                        "rePxK": "rfGxB",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "reOsA",
                        "rePxK": "rfGxA",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "rePxE",
                        "rePxK": "rfGyK",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "rePwG",
                        "rePxK": "rfGyJ",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "reOuC",
                        "rePxK": "rfGyH",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "reOwB",
                        "rePxK": "rfGyG",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "rfGvF",
                        "rePxK": "rfGzE",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "rePzD",
                        "rePxK": "rfGyF",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "rePzC",
                        "rePxK": "rfGyD",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "rePzG",
                        "rePxK": "rfGyB",
                        "loop": false,
                        "volume": 0.3
                    }, {
                        "event": "reOrF",
                        "rePxK": "rfGzK",
                        "loop": true,
                        "volume": 0.3,
                        "override": true
                    }, {
                        "event": "reOrD",
                        "rePxK": "rfGzK",
                        "stop": true
                    }, {
                        "event": "reOvH",
                        "rePxK": "rfGzH",
                        "loop": true,
                        "volume": 0.3,
                        "override": true
                    }, {
                        "event": "reOvF",
                        "rePxK": "rfGzH",
                        "stop": true
                    }]
                ]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuG"
            }, {
                "name": "reOtD"
            }, {
                "name": "reOtH"
            }, {
                "name": "reOuB"
            }, {
                "name": "reOtC"
            }, {
                "name": "reOvG"
            }, {
                "name": "reOsJ",
                "rePuH": [
                    ["rfGtC", "rfGtA", "rfGtB", "rfGuK", "rfGtG"]
                ]
            }, {
                "name": "rePuC",
                "rePuH": [1900, 19]
            }]
        },
        "rePxA": {
            "name": "rePxA",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }]
            }, {
                "name": "rePvK",
                "rePuH": ["reOsD", 1.5, 2, 1, 1.33]
            }, {
                "name": "rePvJ",
                "rePuH": ["reOsD"]
            }, {
                "name": "rePuG",
                "rePuH": [false]
            }, {
                "name": "rePyG",
                "rePuH": [
                    [{
                        "event": "rePtB",
                        "rePxK": "rfGxJ-rfGxG",
                        "loop": false,
                        "volume": 0.1,
                        "override": true
                    }, {
                        "event": "normal",
                        "rePxK": "rfGwC-rfOyC",
                        "loop": true,
                        "volume": 0.1,
                        "override": true
                    }, {
                        "event": "rfIyG",
                        "rePxK": "rfGwA",
                        "loop": false,
                        "volume": 0.1,
                        "override": true
                    }, {
                        "event": "rfKtF",
                        "rePxK": "rfGwB",
                        "loop": false,
                        "volume": 0.1,
                        "override": true
                    }]
                ]
            }]
        },
        "rfJzA": {
            "name": "rfJzA",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOvA"
            }, {
                "name": "reOwJ"
            }, {
                "name": "reOvB"
            }, {
                "name": "reOvC"
            }]
        },
        "floor": {
            "name": "floor",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": -1.57079632679,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }, false]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOsE",
                "rePuH": ["0x0000ff"]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["floorrfpu"]
            }]
        },
        "rePxC": {
            "name": "rePxC",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": -1.57079632679,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }, false]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["floor_noviewPool"]
            }]
        },
        "rfGvH": {
            "name": "rfGvH",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": -1.57079632679,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOxG",
                "rePuH": ["reNsB.png", 0, 0, 0, false]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGvHrfpu"]
            }, {
                "name": "reOxJ",
                "rePuH": [0.25, true]
            }]
        },
        "rfOyK": {
            "name": "rfOyK",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": -1.57079632679,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOxG",
                "rePuH": ["reNsC.png", 0, 0, 0, false]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfOyKrfpu"]
            }, {
                "name": "reOxJ",
                "rePuH": [0.25, true]
            }]
        },
        "rfGvF": {
            "name": "rfGvF",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": -1.57079632679,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOxG",
                "rePuH": ["reNsD.png", 0, 0, 0, false]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGvFrfpu"]
            }, {
                "name": "reOxJ",
                "rePuH": [0.25, true]
            }]
        },
        "rfGvK": {
            "name": "rfGvK",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0.1,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 0.2,
                    "z": 1
                }, false]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOsE",
                "rePuH": ["0x0000ff"]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGvKrfpu"]
            }]
        },
        "rfGuA": {
            "name": "rfGuA",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": -0.3,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 0.6,
                    "z": 1
                }, false]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOxG",
                "rePuH": ["reNtK.png"]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGuArfpu"]
            }]
        },
        "rfJrB": {
            "name": "rfJrB",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.25,
                    "y": 0.25,
                    "z": 0.25
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOxG",
                "rePuH": ["rfJrB.png"]
            }, {
                "name": "rePvF",
                "rePuH": ["rfJrB"]
            }, {
                "name": "reOxJ",
                "rePuH": [0.125, true]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfJrBrfpu"]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvG",
                        "rePxK": "rfGyC",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "rfGtG": {
            "name": "rfGtG",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 0.25,
                    "z": 1
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGtGrfpu"]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOrC",
                "rePuH": ["2/rfgtg."]
            }, {
                "name": "reOrC",
                "rePuH": ["2/rfgtg."]
            }, {
                "name": "reOrC",
                "rePuH": ["2/rfgtg."]
            }, {
                "name": "reOrC",
                "rePuH": ["2/rfgtg."]
            }, {
                "name": "reOrC",
                "rePuH": ["2/rfgtg."]
            }, {
                "name": "reOrC",
                "rePuH": ["2/rfgtg."]
            }, {
                "name": "reOxG",
                "rePuH": ["reNsE.png"]
            }, {
                "name": "reOxG",
                "rePuH": ["reNsE.png"]
            }, {
                "name": "reOxG",
                "rePuH": ["reNsE.png"]
            }, {
                "name": "rePuA",
                "rePuH": [{
                    "x": 1,
                    "y": 0.1,
                    "z": 0.1
                }, true]
            }, {
                "name": "rePuA",
                "rePuH": [{
                    "x": 1,
                    "y": 0.1,
                    "z": 0.1
                }, true]
            }, {
                "name": "rePuA",
                "rePuH": [{
                    "x": 1,
                    "y": 0.1,
                    "z": 0.1
                }, true]
            }, {
                "name": "reOqC"
            }, {
                "name": "reOqB"
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePtB",
                        "rePxK": "rePqG",
                        "loop": true,
                        "volume": 0.3
                    }, {
                        "event": "reOyG",
                        "rePxK": "rePqH",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "background": {
            "name": "background",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1.0,
                    "y": 1.0,
                    "z": 1.0
                }]
            }, {
                "name": "rePuD"
            }, {
                "name": "rePuE",
                "rePuH": [500, false]
            }, {
                "name": "reOxG",
                "rePuH": ["reNsA.png"]
            }, {
                "name": "reOsF"
            }, {
                "name": "rePwF"
            }]
        },
        "rePzE": {
            "name": "rePzE",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.9,
                    "y": 0.9,
                    "z": 0.9
                }]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxG",
                "rePuH": ["reNsA.png"]
            }, {
                "name": "rePuE",
                "rePuH": [300, true]
            }, {
                "name": "rePwF"
            }]
        },
        "rfOsF": {
            "name": "rfOsF",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.9,
                    "y": 0.9,
                    "z": 0.9
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "rfOsF",
                        "rfGvB": "rfOsF"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["rfOsF", true]
            }, {
                "name": "rePvF",
                "rePuH": ["rfOsF"]
            }, {
                "name": "reOxJ",
                "rePuH": [0.125, true]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfOsFrfpu"]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvG",
                        "rePxK": "rfGzG",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "rfGtH": {
            "name": "rfGtH",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.9,
                    "y": 0.9,
                    "z": 0.9
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "rfItA",
                        "rfGvB": "rfItA"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["rfItA", true]
            }, {
                "name": "reOxF",
                "rePuH": ["extra_time", 5]
            }, {
                "name": "reOxJ",
                "rePuH": [0.125, true]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGtHrfpu"]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvG",
                        "rePxK": "rfGzD",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "rfGtF": {
            "name": "rfGtF",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.7,
                    "y": 0.7,
                    "z": 0.7
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "rfGtF",
                        "rfGvB": "rfGtF"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["rfGtF", true]
            }, {
                "name": "reOqA",
                "rePuH": ["rfGtF"]
            }, {
                "name": "reOxJ",
                "rePuH": [0.125, true]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGtFrfpu"]
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvG",
                        "rePxK": "rfGyB",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "rfGtE": {
            "name": "rfGtE",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.7,
                    "y": 0.7,
                    "z": 0.7
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "rfKtE",
                        "rfGvB": "rfKtE"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["rfKtE", true]
            }, {
                "name": "reOrE"
            }, {
                "name": "reOxJ",
                "rePuH": [0.125, true]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGtErfpu"]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvG",
                        "rePxK": "rfGyA",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "key1": {
            "name": "key1",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.7,
                    "y": 0.7,
                    "z": 0.7
                }]
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "reOqE",
                        "rfGvB": "reOqE"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["reOqE", true]
            }, {
                "name": "rePvF",
                "rePuH": ["key1"]
            }, {
                "name": "reOxJ",
                "rePuH": [0.125, true]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["key1rfpu"]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvG",
                        "rePxK": "rfGzF",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "key2": {
            "name": "key2",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.7,
                    "y": 0.7,
                    "z": 0.7
                }]
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "reOqE",
                        "rfGvB": "reOqE"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["reOqE", true]
            }, {
                "name": "rePvF",
                "rePuH": ["key2"]
            }, {
                "name": "reOxJ",
                "rePuH": [0.125, true]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["key2rfpu"]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvG",
                        "rePxK": "rfGzF",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "key3": {
            "name": "key3",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.7,
                    "y": 0.7,
                    "z": 0.7
                }]
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "reOqE",
                        "rfGvB": "reOqE"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["reOqE", true]
            }, {
                "name": "rePvF",
                "rePuH": ["key3"]
            }, {
                "name": "reOxJ",
                "rePuH": [0.125, true]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["key3rfpu"]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvG",
                        "rePxK": "rfGzF",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "rfLtE": {
            "name": "rfLtE",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.7,
                    "y": 0.7,
                    "z": 0.7
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "rfLtE",
                        "rfGvB": "rfLtE"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["rfLtE", true]
            }, {
                "name": "rePzB",
                "rePuH": ["rfLtE", ["rfGtC", "rfGtA", "rfGtB", "rfGuK"]]
            }, {
                "name": "reOxJ",
                "rePuH": [0.125, true]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfLtErfpu"]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvG",
                        "rePxK": "rfGzJ",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }]
        },
        "reOuG": {
            "name": "reOuG",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": -1.57079632679,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }]
            }, {
                "name": "reOxG",
                "rePuH": ["reNsF.png", {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.8,
                    "y": 0.8,
                    "z": 0.8
                }]
            }, {
                "name": "reOwE",
                "rePuH": ["reOsD"]
            }]
        },
        "rfGtC": {
            "name": "rfGtC",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1.0,
                    "y": 1.0,
                    "z": 1.0
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "rfGtC",
                        "rfGvB": "rePyF"
                    }, {
                        "name": "rePzA",
                        "rfGvB": "rePyE"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["rfGtC", true, true]
            }, {
                "name": "reOxJ",
                "rePuH": [0.3, true]
            }, {
                "name": "rePwK"
            }, {
                "name": "reOqD"
            }, {
                "name": "rePzF",
                "rePuH": [1, 1]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGtCrfpu"]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvA",
                        "rePxK": "rfGyE",
                        "loop": false,
                        "volume": 0.3,
                        "override": true
                    }, {
                        "event": "rePtB",
                        "rePxK": "rfGzC",
                        "loop": true,
                        "volume": 0.3
                    }]
                ]
            }, {
                "name": "rePzH"
            }]
        },
        "rfGtB": {
            "name": "rfGtB",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0.5,
                    "y": 0.5,
                    "z": 0.5
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 2.0,
                    "y": 2.0,
                    "z": 1.0
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "rfGtB",
                        "rfGvB": "rePzK"
                    }, {
                        "name": "rePuB",
                        "rfGvB": "rePzJ"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["rfGtB", true, true]
            }, {
                "name": "reOxJ",
                "rePuH": [0.7, true]
            }, {
                "name": "rePwK"
            }, {
                "name": "reOqD"
            }, {
                "name": "rePzF",
                "rePuH": [1, 1]
            }, {
                "name": "rePuD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGtBrfpu"]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvA",
                        "rePxK": "rfGyE",
                        "loop": false,
                        "volume": 0.3,
                        "override": true
                    }, {
                        "event": "rePtB",
                        "rePxK": "rfGzB",
                        "loop": true,
                        "volume": 0.3
                    }]
                ]
            }, {
                "name": "rePzH"
            }]
        },
        "rfGtA": {
            "name": "rfGtA",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1.0,
                    "y": 1.0,
                    "z": 1.0
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "rfGtA",
                        "rfGvB": "rePyB"
                    }, {
                        "name": "reOsG",
                        "rfGvB": "rePyA"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["rfGtA", true, true]
            }, {
                "name": "reOxJ",
                "rePuH": [0.3, true]
            }, {
                "name": "rePwK"
            }, {
                "name": "reOqD"
            }, {
                "name": "rePzF",
                "rePuH": [1, 1]
            }, {
                "name": "reOwD"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGtArfpu"]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvA",
                        "rePxK": "rfGyE",
                        "loop": false,
                        "volume": 0.3,
                        "override": true
                    }, {
                        "event": "rePtB",
                        "rePxK": "rfGzA",
                        "loop": true,
                        "volume": 0.3
                    }]
                ]
            }, {
                "name": "rePzH"
            }]
        },
        "rfGuK": {
            "name": "rfGuK",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1.0,
                    "y": 1.0,
                    "z": 1.0
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "rfGuK",
                        "rfGvB": "rePyD"
                    }, {
                        "name": "rePvH",
                        "rfGvB": "rePyC"
                    }]
                ]
            }, {
                "name": "rePuK",
                "rePuH": ["rfGuK", true, true]
            }, {
                "name": "reOxJ",
                "rePuH": [0.3, true]
            }, {
                "name": "rePwK"
            }, {
                "name": "reOqD"
            }, {
                "name": "rePzF",
                "rePuH": [1, 1]
            }, {
                "name": "reOtE"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGuKrfpu"]
            }, {
                "name": "rePuG"
            }, {
                "name": "rePuF",
                "rePuH": [
                    [{
                        "event": "rePvA",
                        "rePxK": "rfGyE",
                        "loop": false,
                        "volume": 0.3,
                        "override": true
                    }, {
                        "event": "rePtB",
                        "rePxK": "rePqK",
                        "loop": true,
                        "volume": 0.3
                    }, {
                        "event": "reOrB",
                        "rePxK": "rePqJ",
                        "loop": false,
                        "volume": 0.3
                    }]
                ]
            }, {
                "name": "rePzH"
            }]
        },
        "reOtG": {
            "name": "reOtG",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 5,
                    "y": 5,
                    "z": 5
                }]
            }, {
                "name": "rePtA",
                "rePuH": [
                    [{
                        "name": "reOxK",
                        "rfGvB": "REOXK"
                    }], {
                        "x": 0,
                        "y": 0.2,
                        "z": 0
                    }
                ]
            }, {
                "name": "rePxJ",
                "rePuH": ["reOsD"]
            }, {
                "name": "reOwA"
            }, {
                "name": "rePwE"
            }, {
                "name": "rePuD"
            }]
        },
        "rfGuF": {
            "name": "rfGuF",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1.0,
                    "y": 1.0,
                    "z": 1.0
                }]
            }, {
                "name": "reOrC",
                "rePuH": ["treeGreenOne/treeGreenOne"]
            }, {
                "name": "rePwH",
                "rePuH": [0]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGuFrfpu"]
            }]
        },
        "rfGuE": {
            "name": "rfGuE",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1.0,
                    "y": 1.0,
                    "z": 1.0
                }]
            }, {
                "name": "reOrC",
                "rePuH": ["rockOne/rockOne"]
            }, {
                "name": "rePwH",
                "rePuH": [1]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGuErfpu"]
            }]
        },
        "rfGuD": {
            "name": "rfGuD",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1.0,
                    "y": 1.0,
                    "z": 1.0
                }]
            }, {
                "name": "reOrC",
                "rePuH": ["rockOne/rockOne"]
            }, {
                "name": "rePwH",
                "rePuH": [2]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGuDrfpu"]
            }]
        },
        "rfGuC": {
            "name": "rfGuC",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.1,
                    "y": 0.1,
                    "z": 0.1
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOrC",
                "rePuH": ["1/rfGuC."]
            }, {
                "name": "rePuJ"
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGuCrfpu"]
            }]
        },
        "reOuJ": {
            "name": "reOuJ",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 1.2,
                    "y": 1.2,
                    "z": 1.2
                }]
            }, {
                "name": "reOxG",
                "rePuH": ["reNuF.png", {
                    "x": 0,
                    "y": 0.05,
                    "z": 0.01
                }]
            }, {
                "name": "reOrC",
                "rePuH": ["3/rfGsG."]
            }, {
                "name": "rePxJ",
                "rePuH": ["reOsD"]
            }, {
                "name": "rePwE"
            }, {
                "name": "rePxB"
            }]
        },
        "rePyJ": {
            "name": "rePyJ",
            "rePvD": [{
                "name": "rePyH",
                "rePuH": ["rePxA", {
                    "rePxK": "rfGxK",
                    "loop": true,
                    "volume": 0.1
                }]
            }, {
                "name": "rePuG",
                "rePuH": [false]
            }]
        },
        "rfGuB": {
            "name": "rfGuB",
            "rePvD": [{
                "name": "transform",
                "rePuH": [{
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }, {
                    "x": 0.1,
                    "y": 0.1,
                    "z": 0.1
                }]
            }, {
                "name": "reOxD"
            }, {
                "name": "reOrC",
                "rePuH": ["4/rfGuB."]
            }, {
                "name": "reOxC"
            }, {
                "name": "reOuA",
                "rePuH": ["rfGuBrfpu"]
            }]
        },
        "reOyF": {
            "name": "reOyF",
            "rePvD": [{
                "name": "rePuG",
                "rePuH": [false]
            }, {
                "name": "reOyE"
            }]
        }
    },
    "1": {
        "height": 205,
        "layers": [{
            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "height": 205,
            "name": "Floor",
            "opacity": 1,
            "type": "reOzH",
            "rfIxE": true,
            "width": 13,
            "x": 0,
            "y": 0
        }, {
            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 33, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 33, 0, 0, 0, 0, 0, 33, 0, 0, 10, 0, 10, 0, 0, 0, 32, 0, 0, 0, 0, 0, 31, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 33, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 33, 0, 0, 33, 0, 0, 31, 10, 0, 10, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 33, 10, 0, 10, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 33, 0, 0, 32, 10, 0, 10, 0, 33, 0, 0, 31, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 10, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 31, 0, 0, 0, 33, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 33, 0, 0, 0, 33, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 32, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 10, 0, 10, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 10, 0, 0, 0, 0, 32, 0, 31, 0, 0, 0, 0, 0, 10, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 29, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 31, 0, 0, 0, 32, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "height": 205,
            "name": "reozg",
            "opacity": 1,
            "type": "reOzH",
            "rfIxE": true,
            "width": 13,
            "x": 0,
            "y": 0
        }, {
            "reOzE": "reOzD",
            "height": 100,
            "name": "reozc",
            "reOzG": [{
                "height": 32,
                "id": 10,
                "name": "rfHwK",
                "reOzC": {
                    "reOzB": "reOzA"
                },
                "rfIqD": 0,
                "type": "",
                "rfIxE": true,
                "width": 77.3333333333333,
                "x": 169.333333333333,
                "y": 5938
            }, {
                "height": 32,
                "id": 16,
                "name": "rfHwF",
                "reOzC": {
                    "reOzB": "4"
                },
                "rfIqD": 0,
                "type": "",
                "rfIxE": true,
                "width": 88,
                "x": 164,
                "y": 1929
            }],
            "opacity": 1,
            "type": "reNqK",
            "rfIxE": true,
            "width": 100,
            "x": 0,
            "y": 0
        }],
        "reNqJ": 18,
        "reNqH": "reNqG",
        "reOzC": {
            "reNqF": "reNqE",
            "rfIyH": "50"
        },
        "reNqD": "right-rfHwC",
        "reNqC": 32,
        "reNqB": [{
            "reNqA": 1,
            "margin": 0,
            "name": "reNrJ-floor",
            "reOzC": {},
            "reNrH": 0,
            "reNqC": 32,
            "reNrG": {},
            "reNrF": 32
        }, {
            "reNqA": 10,
            "margin": 0,
            "name": "reNrJ\/objects",
            "reOzC": {},
            "reNrH": 0,
            "reNqC": 32,
            "reNrG": {},
            "reNrF": 32
        }],
        "reNrF": 32,
        "reNrE": 1,
        "width": 13
    },
    "2": {
        "height": 70,
        "layers": [{
            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
            "height": 70,
            "name": "Floor",
            "opacity": 1,
            "type": "reOzH",
            "rfIxE": true,
            "width": 86,
            "x": 0,
            "y": 0
        }, {
            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 32, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 33, 0, 0, 0, 32, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 32, 0, 0, 0, 31, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 30, 10, 10, 10, 10, 10, 10, 0, 0, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 29, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 10, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 10, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 10, 33, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 31, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 10, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 10, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 10, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 31, 0, 33, 10, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 31, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 31, 0, 0, 33, 0, 0, 0, 0, 33, 0, 31, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 33, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 33, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 33, 0, 0, 0, 0, 0, 32, 0, 0, 0, 31, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 33, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "height": 70,
            "name": "reozg",
            "opacity": 1,
            "type": "reOzH",
            "rfIxE": true,
            "width": 86,
            "x": 0,
            "y": 0
        }, {
            "reOzE": "reOzD",
            "height": 100,
            "name": "reozc",
            "reOzG": [{
                "height": 108.515151515152,
                "id": 7,
                "name": "rfhxj",
                "reOzC": {
                    "reOzB": "reNrD"
                },
                "rfIqD": 0,
                "type": "",
                "rfIxE": true,
                "width": 96,
                "x": 2397.33333333333,
                "y": 862.666666666667
            }],
            "opacity": 1,
            "type": "reNqK",
            "rfIxE": true,
            "width": 100,
            "x": 0,
            "y": 0
        }],
        "reNqJ": 8,
        "reNqH": "reNqG",
        "reOzC": {
            "reNqF": "reNqE",
            "rfIyH": "60"
        },
        "reNqD": "right-rfHwC",
        "reNqC": 32,
        "reNqB": [{
            "reNqA": 1,
            "margin": 0,
            "name": "reNrJ-floor",
            "reOzC": {},
            "reNrH": 0,
            "reNqC": 32,
            "reNrG": {},
            "reNrF": 32
        }, {
            "reNqA": 10,
            "margin": 0,
            "name": "reNrJ\/objects",
            "reOzC": {},
            "reNrH": 0,
            "reNqC": 32,
            "reNrG": {},
            "reNrF": 32
        }],
        "reNrF": 32,
        "reNrE": 1,
        "width": 86
    },
    "rfGuC.mtl": "77u/IyBDcmVhdGVkIEJ5IENhcnJhcmEgOC4wDQoNCm5ld210bCBUZXh0dXJlXzANCiBOcyAxMDI0DQogZCAxDQogTmkgMC4wMDENCiBLbSAxDQogaWxsdW0gMg0KIEthIDAuMiAwLjIgMC4yDQogS2QgMSAxIDENCiBLcyAwIDAgMA0KIG1hcF9LZCBUZXh0dXJlXzAucG5nDQoNCm5ld210bCBUZXh0dXJlXzBfMQ0KIE5zIDEwMjQNCiBkIDAuNQ0KIE5pIDAuMDAxDQogS20gMQ0KIGlsbHVtIDINCiBLYSAwLjIgMC4yIDAuMg0KIEtkIDEgMSAxDQogS3MgMCAwIDANCiBtYXBfS2QgVGV4dHVyZV8wMi5wbmcNCg==",
    "rfGuC.obj": "77u/IyBDcmVhdGVkIEJ5IENhcnJhcmEgOC4wDQoNCm10bGxpYiBhcmNoLk10bA0KDQojIE51bWJlciBvZiB2ZXJ0aWNlczogOTYNCnYgMC4xMTczOTYgLTI2LjEyNjczNCAtOTMuODk1MzI1DQp2IDkuOTM1OTUyIC0yNi43MjgzMDQgLTg5Ljg5MjI0Mg0KdiA5LjQ2NDI0NCAtNTEuNjU5NTE1IC04OS43NDA1MDENCnYgLTAuMzUxMTggLTUxLjY4MjAyNiAtOTMuNzUzNTc4DQp2IDAuMDQwODI0IDIuMTg0MzUyIC04NC43NTQwMDUNCnYgOS44NjI2MzIgMC4zNzk0MzIgLTgxLjEzOTQ3Mw0KdiAxNC4wMTYzODQgLTI4LjIzNDMyNyAtODAuMjAzNDYxDQp2IDEzLjcxMDQzMiAtNTEuNjY2MDMxIC04MC4wODA2NDMNCnYgOS45MDAwMjQgLTUxLjY5NzgxOSAtNzAuNDMyNjQ4DQp2IDAuMjY1MTE2IC01MS43MzYyMDYgLTY2LjQ0ODE1MQ0KdiAtOS41NTAzMiAtNTEuNzU4NzI4IC03MC40NjEyMDUNCnYgLTEzLjc5NjUwOCAtNTEuNzUyMjAxIC04MC4xMjEwNjMNCnYgLTkuOTg2MSAtNTEuNzIwNDEzIC04OS43NjkwNDMNCnYgLTkuNjg3Njg0IC0yNi43ODE5MzMgLTg5Ljg2NzcyMg0KdiAxMy45NTA5NiAtNC4wNDUxNzIgLTcyLjM5MzA1OQ0KdiA5Ljk2ODQzNiAtMjkuNzYyNDU1IC03MC41MDQ1MzkNCnYgOS45MTA5MTkgLTguNDk3Mzg5IC02My42MzgyOTQNCnYgMC4xNjMzNTYgLTMwLjQxNzU4MyAtNjYuNDc2OTY3DQp2IDAuMTA5MTI4IC0xMC4zNjkyNDQgLTYwLjAwMzU4Ng0KdiAtOS42NTUyIC0yOS44MTYwODQgLTcwLjQ4MDAxOQ0KdiAtOS43MTI2OCAtOC41NjQzMzcgLTYzLjYxODA5NQ0KdiAtMTMuNzM1NjMyIC0yOC4zMDk5ODggLTgwLjE2ODgNCnYgLTEzLjgwMDk5NSAtNC4xMzk3OTIgLTcyLjM2NDUxDQp2IC05Ljc2MDk2NyAwLjMxMjQxMiAtODEuMTE5Mjc4DQp2IC0wLjAzNDE4OCAyNi4yODQ5MjUgLTY3LjMxMTQzMg0KdiA5Ljc5MDgxMiAyMy40NTU1MjYgLTY0LjQzODI3OA0KdiAxMy44ODY4NjggMTYuNTQ2NTY0IC01Ny40ODk5OTgNCnYgOS44NTQ1OCA5LjYwNTIgLTUwLjUzNjc1NQ0KdiAwLjA1NjAxNiA2LjY5NzQ2OCAtNDcuNjUxNjk5DQp2IC05Ljc2ODk4NCA5LjUyNjc3OSAtNTAuNTI0ODI2DQp2IC0xMy44NjUwNCAxNi40MzU3NDUgLTU3LjQ3MzExDQp2IC05LjgzMjc1MiAyMy4zNzcxOCAtNjQuNDI2MzQ2DQp2IC0wLjEwMDMwOCA0My44MTU4MTEgLTQzLjI3NTA0Nw0KdiA5LjcyNzQ4OCA0MC4yNDE0MDUgLTQxLjQyMzU1Mw0KdiAxMy44MzAzNzIgMzEuNTI1MTIgLTM2Ljk1MzEyNQ0KdiA5LjgwNDkxMyAyMi43NzMxMzYgLTMyLjQ4MjQ1Mg0KdiAwLjAwOTE4IDE5LjExMTk0OCAtMzAuNjMwNDIxDQp2IC05LjgxODYxNiAyMi42ODYzNCAtMzIuNDgxOTExDQp2IC0xMy45MjE1IDMxLjQwMjYyMiAtMzYuOTUyMzMyDQp2IC05Ljg5NjA0IDQwLjE1NDY4MiAtNDEuNDIyOTgxDQp2IC0wLjE1MTA2OCA1My4wNjEwNjYgLTE0Ljk5NzcwOA0KdiA5LjY3ODg4OCA0OS4wOTM2MzkgLTE0LjM0ODEyNQ0KdiAxMy43ODY5OTIgMzkuNDI0MzYyIC0xMi43OTI3NTcNCnYgOS43NjY3ODggMjkuNzE3NDYzIC0xMS4yNDI2NjgNCnYgLTAuMDI2NzYgMjUuNjU4OTY4IC0xMC42MDU5MzYNCnYgLTkuODU2NzI5IDI5LjYyNjM0OCAtMTEuMjU1NTINCnYgLTEzLjk2NDgzMiAzOS4yOTU2MTYgLTEyLjgxMDg4OA0KdiAtOS45NDQ2MTYgNDkuMDAyNTc5IC0xNC4zNjA5NDENCnYgLTAuMTgxNSA1My4xMTU2NjUgMTQuNzUyNTk2DQp2IDkuNjQ5NzY0IDQ5LjE0NTg4OSAxNC4xMzc2NTYNCnYgMTMuNzYxIDM5LjQ3MDk4MiAxMi42MjYxMzcNCnYgOS43NDM5MjggMjkuNzU4MzgzIDExLjEwMzUwNA0KdiAtMC4wNDgzIDI1LjY5NzU1OSAxMC40NjE2MzYNCnYgLTkuODc5NTY0IDI5LjY2NzM0MSAxMS4wNzY1NjQNCnYgLTEzLjk5MDggMzkuMzQyMTc1IDEyLjU4ODA5Nw0KdiAtOS45NzM3MjggNDkuMDU0NzcxIDE0LjExMDc2NA0KdiAtMC4xODg2MTYgNDMuOTc0MjgxIDQzLjA2Mzc0DQp2IDkuNjQyOTQ4IDQwLjM5MzAxMyA0MS4yNDU0MzgNCnYgMTMuNzU0OTI5IDMxLjY2MDUyNiAzNi44MTUzOTkNCnYgOS43Mzg1ODggMjIuODkyMDY3IDMyLjM2ODY5DQp2IC0wLjA1MzM0IDE5LjIyNDEzNiAzMC41MTAwODINCnYgLTkuODg0OTA0IDIyLjgwNTM0NCAzMi4zMjgzNQ0KdiAtMTMuOTk2ODcyIDMxLjUzNzgyOCAzNi43NTg0DQp2IC05Ljk4MDUzMiA0MC4zMDYyMTcgNDEuMjA1MTQ3DQp2IC0wLjE3MTcwOCAyNi41MzE3MDYgNjcuMTY0Mzk4DQp2IDkuNjU5MTI0IDIzLjY5MTc5NyA2NC4zMjE3MDkNCnYgMTMuNzY5MzYzIDE2Ljc1NzQzOSA1Ny40MDcxOTYNCnYgOS43NTEyODQgOS43OTA1MjcgNTAuNDcxMjk0DQp2IC0wLjA0MTM3NiA2Ljg3MjIxMiA0Ny41NzY4OTMNCnYgLTkuODcyMjA4IDkuNzEyMDQ4IDUwLjQxOTU0OA0KdiAtMTMuOTgyNDQ5IDE2LjY0NjQwNCA1Ny4zMzQwNjgNCnYgLTkuOTY0MzY4IDIzLjYxMzMxNiA2NC4yNzAwMDQNCnYgLTAuMTMyNDY4IDIuNDk1NDA0IDg0LjY5NTQxOQ0KdiA5LjY5NjcwOCAwLjY3NzE2NCA4MS4xMDc1ODINCnYgMTMuODAyODkzIC0zLjc3OTMxMiA3Mi4zODU4NDkNCnYgOS43ODA3NTYgLTguMjYzNjUyIDYzLjYzOTI5DQp2IC0wLjAxMzU4NCAtMTAuMTQ5MDQ0IDU5Ljk5MTQzMg0KdiAtOS44NDI3NDggLTguMzMwODA1IDYzLjU3OTI0Mw0KdiAtMTMuOTQ4OTMyIC0zLjg3NDM0IDcyLjMwMDk4Nw0KdiAtOS45MjY3OTYgMC42MTAwMTIgODEuMDQ3NTY5DQp2IC0wLjA3NDcgLTI1Ljc4MTk3MSA5My45NDA3NjUNCnYgOS43NTIwMTYgLTI2LjM5ODIzMyA4OS45NTk5NjENCnYgMTMuODUyMjQ3IC0yNy45Mzk3NTMgODAuMjg1MTQ5DQp2IDkuODI0MTQ4IC0yOS41MDM1MjEgNzAuNTgzNjcyDQp2IDAuMDI3MzI0IC0zMC4xNzM0ODEgNjYuNTM4NDgzDQp2IC05Ljc5OTM5MiAtMjkuNTU3MjA3IDcwLjUxOTI1Nw0KdiAtMTMuODk5NjI0IC0yOC4wMTU2OTkgODAuMTk0MDY5DQp2IC05Ljg3MTUxMSAtMjYuNDUyMDY2IDg5Ljg5NTU1NA0KdiAtMC4wNDkwOCAtNTIuMDY2NzU3IDkzLjk5NzQ5OA0KdiA5Ljc3MjQ4OSAtNTIuMDI3ODMyIDkwLjAyOTM0Mw0KdiAxNC4wMzM2MDQgLTUxLjk5NDU1MyA4MC4zMzEzMTQNCnYgMTAuMjM4MTQ4IC01MS45ODY0MTYgNzAuNTg0MzEyDQp2IDAuNjA5NDY4IC01Mi4wMDgyMjQgNjYuNDk3OTQNCnYgLTkuMjEyMTEyIC01Mi4wNDcxNSA3MC40NjYwNDkNCnYgLTEzLjQ3MzIyOCAtNTIuMDgwNDI5IDgwLjE2NDA3OA0KdiAtOS42Nzc3NzMgLTUyLjA4ODU2MiA4OS45MTEwODcNCg0KIyBOdW1iZXIgb2Ygbm9ybWFsczogMTEyDQp2biAtMC4wMjcxMjIgMC4xNjI0MDMgLTAuOTg2MzUyDQp2biAwLjY2NTA5MyAwLjEwNzc4NyAtMC43Mzg5NDENCnZuIDAuNzM4MjI1IC0wLjAxNTY1NSAtMC42NzQzNzMNCnZuIDAuMDAzMTM1IC0wLjk5OTk5MyAtMC4wMDIwNTUNCnZuIC0wLjAwNDc2OSAtMC4wMDYwOTkgLTAuOTk5OTcNCnZuIDAuMDAzMTM0IC0wLjk5OTk5MyAtMC4wMDIwNTUNCnZuIC0wLjAwMjQ0NiAwLjQ1MjMyNSAtMC44OTE4NQ0Kdm4gMC43MDE2MzkgMC4zMzAxMzggLTAuNjMxNDM2DQp2biAwLjk5NzcxNyAwLjAwMzA2OSAtMC4wNjc0NjYNCnZuIDAuOTk4OTQ4IC0wLjAwOTIzMyAwLjA0NDkxNA0Kdm4gMC4wMDMxMzkgLTAuOTk5OTkzIC0wLjAwMjA1NQ0Kdm4gMC4wMDMxMzYgLTAuOTk5OTkzIC0wLjAwMjA1NQ0Kdm4gMC42NjczMTYgMC4wMDA4NzMgMC43NDQ3NzQNCnZuIDAuMDAzMTM1IC0wLjk5OTk5MyAtMC4wMDIwNTUNCnZuIDAuMDAyMDAzIDAuMDAxMzYxIDAuOTk5OTk3DQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU1DQp2biAtMC42NTQyNjQgLTAuMDAyMjg5IDAuNzU2MjYzDQp2biAwLjAwMzEzOCAtMC45OTk5OTMgLTAuMDAyMDU1DQp2biAtMC45OTcxMjQgLTAuMDAwMjc1IDAuMDc1NzkzDQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU1DQp2biAtMC43NTEwOTUgMC4wMDI5NTkgLTAuNjYwMTg4DQp2biAtMC43MDIzOTcgMC4xMDQ0OTYgLTAuNzA0MDczDQp2biAwLjk5OTg4MiAwLjAxNDgwNSAtMC4wMDQxMzkNCnZuIDAuNzU1NTQ5IC0wLjEwMjg4MSAwLjY0Njk2NA0Kdm4gMC43MTMxMyAtMC4zMTA4MDkgMC42MjgzNjUNCnZuIDAuMDMwOTQ3IC0wLjE0Mzc0NSAwLjk4OTEzMQ0Kdm4gMC4wMDI0ODMgLTAuNDUyMzMyIDAuODkxODQ2DQp2biAtMC43MTA0NjIgLTAuMTE0Nzc4IDAuNjk0MzEzDQp2biAtMC43MDk2NTUgLTAuMzI0OTQzIDAuNjI1MTQxDQp2biAtMC45OTk5NDggLTAuMDA1NzQyIC0wLjAwODQ0NA0Kdm4gLTAuOTk5OTIxIC0wLjAwNzYyMyAtMC4wMTAwMDMNCnZuIC0wLjcwNTExOSAwLjMxMjg1MyAtMC42MzYzNDENCnZuIC0wLjAwMzIzMyAwLjcwNTc4MiAtMC43MDg0MjENCnZuIDAuNzAxMDggMC41MDk0MDYgLTAuNDk4OTkyDQp2biAwLjk5OTg3NSAwLjAxNTc5IC0wLjAwMDA0Ng0Kdm4gMC43MTM2ODYgLTAuNDg5NDY0IDAuNTAxMDc2DQp2biAwLjAwMzI3MiAtMC43MDU3ODcgMC43MDg0MTYNCnZuIC0wLjcwOTEgLTAuNTAyNTI0IDAuNDk0NjE3DQp2biAtMC45OTk5MjcgLTAuMDA0NTkgLTAuMDExMTg1DQp2biAtMC43MDU2OCAwLjQ5Mzg3NyAtMC41MDgwMzYNCnZuIC0wLjAwMzkzIDAuODkwMTUxIC0wLjQ1NTY0OQ0Kdm4gMC43MDA1ODUgMC42Mzg5NzQgLTAuMzE3NjM2DQp2biAwLjk5OTg3MiAwLjAxNTQ2MSAwLjAwNDE1Mw0Kdm4gMC43MTQxNzUgLTAuNjIwMDQxIDAuMzI0ODExDQp2biAwLjAwMzk2OSAtMC44OTAxNTQgMC40NTU2NDINCnZuIC0wLjcwODYxMiAtMC42MzEwOCAwLjMxNTYwNw0Kdm4gLTAuOTk5OTM0IC0wLjAwMTMzOSAtMC4wMTEzNzINCnZuIC0wLjcwNjE3NSAwLjYyNjM5NCAtMC4zMzAwNzINCnZuIC0wLjAwNDQ2MyAwLjk4NzM4NSAtMC4xNTgyNzQNCnZuIDAuNzAwMjExIDAuNzA2MTU2IC0wLjEwNTExNQ0Kdm4gMC45OTk4NzIgMC4wMTM4NTMgMC4wMDgwNDMNCnZuIDAuNzE0NTUzIC0wLjY4OTc1OSAwLjExNjgyMQ0Kdm4gMC4wMDQ1MDIgLTAuOTg3Mzg2IDAuMTU4MjY1DQp2biAtMC43MDgyNCAtMC42OTgwMjUgMC4xMDU2Mw0Kdm4gLTAuOTk5OTQzIDAuMDAxODA5IC0wLjAxMDU0NA0Kdm4gLTAuNzA2NTU4IDAuNjk3NDI5IC0wLjExOTg2OA0Kdm4gLTAuMDA0Nzg0IDAuOTg3OTY3IDAuMTU0NTkzDQp2biAwLjY5OTk4OSAwLjcwNDM3NyAwLjExNzc2Mw0Kdm4gMC45OTk4NzUgMC4wMTExMjEgMC4wMTEyNDYNCnZuIDAuNzE0NzgxIC0wLjY5MTc5MiAtMC4xMDI1MzINCnZuIDAuMDA0ODE4IC0wLjk4Nzk2NSAtMC4xNTQ2MDENCnZuIC0wLjcwODAyIC0wLjY5NjgwNyAtMC4xMTQ3NTUNCnZuIC0wLjk5OTk1MSAwLjAwNDU0NyAtMC4wMDg3ODUNCnZuIC0wLjcwNjc5MiAwLjcwMDAzIDAuMTAxOTk4DQp2biAtMC4wMDQ4NTggMC44OTE4MzkgMC40NTIzMjcNCnZuIDAuNjk5OTQyIDAuNjMzODEzIDAuMzI5MTg0DQp2biAwLjk5OTg4MSAwLjAwNzUzNCAwLjAxMzQ0OA0Kdm4gMC43MTQ4MzcgLTAuNjI1OTQyIC0wLjMxMTc3Ng0Kdm4gMC4wMDQ4OTMgLTAuODkxODM1IC0wLjQ1MjMzNA0Kdm4gLTAuNzA3OTcxIC0wLjYyNzU0NyAtMC4zMjM5NzkNCnZuIC0wLjk5OTk1OSAwLjAwNjYxIC0wLjAwNjI2NQ0Kdm4gLTAuNzA2ODUxIDAuNjMzOTQ0IDAuMzEzODA5DQp2biAtMC4wMDQ2NzcgMC43MDg0MTEgMC43MDU3ODQNCnZuIDAuNzAwMDc0IDAuNTAxMzcxIDAuNTA4NDUyDQp2biAwLjk5OTg5IDAuMDAzNDQgMC4wMTQ0MzQNCnZuIDAuNzE0NzE3IC0wLjQ5ODY1NSAtMC40OTA0MzINCnZuIDAuMDA0NzE2IC0wLjcwODQwNSAtMC43MDU3OQ0Kdm4gLTAuNzA4MSAtMC40OTcwMjMgLTAuNTAxNTU5DQp2biAtMC45OTk5NjQgMC4wMDc3OSAtMC4wMDMyMzMNCnZuIC0wLjcwNjczIDAuNTA1NjQxIDAuNDk0ODM0DQp2biAtMC4wMDQyNjUgMC40NTU2MzggMC44OTAxNTUNCnZuIDAuNzAwMzcyIDAuMzIwMDE1IDAuNjM4MDINCnZuIDAuOTk5OSAtMC4wMDA3NTggMC4wMTQxMDYNCnZuIDAuNzE0NDMyIC0wLjMyMjM4OCAtMC42MjEwMDkNCnZuIDAuMDA0MzA0IC0wLjQ1NTYzIC0wLjg5MDE1OQ0Kdm4gLTAuNzA4Mzk1IC0wLjMxODAxMiAtMC42MzAxMTQNCnZuIC0wLjk5OTk2OCAwLjAwNzk3NyAwLjAwMDAxNw0Kdm4gLTAuNzA2NDQyIDAuMzI3Njc3IDAuNjI3MzUNCnZuIDAuMDIxNzU2IDAuMTY4MDIgMC45ODU1NDQNCnZuIDAuNjk5MDk2IDAuMTA2NjA3IDAuNzA3MDM2DQp2biAwLjk5OTg2NCAtMC4wMDMyOTQgMC4wMTYxNzgNCnZuIDAuNzE2MjMgLTAuMTA5ODQ2IC0wLjY4OTE2NQ0Kdm4gLTAuMDI3MTU0IC0wLjE0NjA3NyAtMC45ODg5DQp2biAtMC43NTAwMTMgLTAuMTExNzIxIC0wLjY1MTkxOQ0Kdm4gLTAuOTk4MjkgMC4wMDE0NTkgMC4wNTg0Mw0Kdm4gLTAuNjY5NjI1IDAuMTE0MDY4IDAuNzMzODg3DQp2biAtMC4wMDczOTkgMC4wMDA3ODkgMC45OTk5NzINCnZuIDAuMDAzMTM1IC0wLjk5OTk5MyAtMC4wMDIwNTQNCnZuIDAuNzM2NTEyIDAuMDA0OTE1IDAuNjc2NDA3DQp2biAwLjAwMzEzNCAtMC45OTk5OTMgLTAuMDAyMDU0DQp2biAwLjk5OTA4NyAwLjAxMjAwMyAtMC4wNDEwMDINCnZuIDAuMDAzMTM1IC0wLjk5OTk5MyAtMC4wMDIwNTUNCnZuIDAuNjczNDg0IDAuMDE0NDQ0IC0wLjczOTA2DQp2biAwLjAwMzEzOCAtMC45OTk5OTMgLTAuMDAyMDU3DQp2biAwLjAwODY5IDAuMDAyMDg4IC0wLjk5OTk2DQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU0DQp2biAtMC42NTIxMDMgLTAuMDE1NTE3IC0wLjc1Nzk3Mg0Kdm4gMC4wMDMxMzQgLTAuOTk5OTkzIC0wLjAwMjA1NA0Kdm4gLTAuOTk2ODAxIC0wLjAyMDYwNiAtMC4wNzcyMjYNCnZuIDAuMDAzMTM1IC0wLjk5OTk5MyAtMC4wMDIwNTQNCnZuIC0wLjc1MzU5MSAtMC4wMDk2MzQgMC42NTcyNzMNCnZuIDAuMDAzMTM3IC0wLjk5OTk5MyAtMC4wMDIwNTYNCg0KIyBOdW1iZXIgb2YgdGV4dHVyZSB2ZXJ0aWNlczogMTEyDQp2dCAwLjAyODMzNCAwLjM2MzA2MQ0KdnQgMC4wNDg0MzEgMC4zNTk5NjENCnZ0IDAuMDQ5MTkzIDAuMjMxNDg3DQp2dCAwLjA0OTE5MyAwLjIzMTQ4Nw0KdnQgMC4wMjkwNDYgMC4yMzEzNzENCnZ0IDAuMDI5MDQ2IDAuMjMxMzcxDQp2dCAwLjA3NDIyNyAwLjUwODk1Mg0KdnQgMC4wOTIzNzMgMC40OTk2NTENCnZ0IDAuMDk3MDcyIDAuMzUyMg0KdnQgMC4wOTc2ODggMC4yMzE0NTMNCnZ0IDAuMDk3Njg4IDAuMjMxNDUzDQp2dCAwLjE0NjEyNSAwLjIzMTI4OQ0KdnQgMC4xNDYxMjUgMC4yMzEyODkNCnZ0IDAuMTY2MTI4IDAuMjMxMDkyDQp2dCAwLjE2NjEyOCAwLjIzMTA5Mg0KdnQgMC4xNDU5ODEgMC4yMzA5NzUNCnZ0IDAuMTQ1OTgxIDAuMjMwOTc1DQp2dCAwLjA5NzQ4NiAwLjIzMTAwOQ0KdnQgMC4wOTc0ODYgMC4yMzEwMDkNCnZ0IDAuMDQ5MDQ5IDAuMjMxMTczDQp2dCAwLjA0OTA0OSAwLjIzMTE3Mw0KdnQgMC4wNDg1NTQgMC4zNTk2ODUNCnZ0IDAuMTM2MjgzIDAuNDc2ODUxDQp2dCAwLjE0NTc2NCAwLjM0NDMyNg0KdnQgMC4xODAyMzUgMC40NTM5MDgNCnZ0IDAuMTY1OTg0IDAuMzQwOTUNCnZ0IDAuMTk4NDgyIDAuNDQ0MjYyDQp2dCAwLjE0NTg4NyAwLjM0NDA0OQ0KdnQgMC4xODAzMzYgMC40NTM1NjMNCnZ0IDAuMDk3MjQ2IDAuMzUxODENCnZ0IDAuMTM2NDI2IDAuNDc2MzYzDQp2dCAwLjA5MjQ3NCAwLjQ5OTMwNg0KdnQgMC4xNjE3OTQgMC42MzMxNDYNCnZ0IDAuMTc2MjE4IDAuNjE4NTY2DQp2dCAwLjIxMTEwMSAwLjU4Mjk2Mw0KdnQgMC4yNDYwMDkgMC41NDcxOTMNCnZ0IDAuMjYwNDkzIDAuNTMyMjA5DQp2dCAwLjI0NjA2OSAwLjU0Njc4OQ0KdnQgMC4yMTExODYgMC41ODIzOTINCnZ0IDAuMTc2Mjc4IDAuNjE4MTYyDQp2dCAwLjI4MjQ2NSAwLjcyMzQ4NQ0KdnQgMC4yOTE3NiAwLjcwNTA2Ng0KdnQgMC4zMTQyMDMgMC42NjAxNQ0KdnQgMC4zMzY2NDcgMC42MTUwNDkNCnZ0IDAuMzQ1OTQ1IDAuNTk2MTgzDQp2dCAwLjMzNjY1IDAuNjE0NjAyDQp2dCAwLjMxNDIwNyAwLjY1OTUxOA0KdnQgMC4yOTE3NjMgMC43MDQ2MTkNCnZ0IDAuNDI0NDI3IDAuNzcxMTI4DQp2dCAwLjQyNzY4OCAwLjc1MDY4Mw0KdnQgMC40MzU0OTYgMC43MDA4NTYNCnZ0IDAuNDQzMjc4IDAuNjUwODM1DQp2dCAwLjQ0NjQ3NSAwLjYyOTkyDQp2dCAwLjQ0MzIxNCAwLjY1MDM2NQ0KdnQgMC40MzU0MDUgMC43MDAxOTINCnZ0IDAuNDI3NjI0IDAuNzUwMjE0DQp2dCAwLjU3Mzc4MyAwLjc3MTQwOQ0KdnQgMC41NzA2OTYgMC43NTA5NTINCnZ0IDAuNTYzMTA4IDAuNzAxMDk2DQp2dCAwLjU1NTQ2NCAwLjY1MTA0NQ0KdnQgMC41NTIyNDEgMC42MzAxMTkNCnZ0IDAuNTU1MzI4IDAuNjUwNTc2DQp2dCAwLjU2MjkxNyAwLjcwMDQzMg0KdnQgMC41NzA1NjEgMC43NTA0ODMNCnZ0IDAuNzE1OTE1IDAuNzI0MzAyDQp2dCAwLjcwNjc4NiAwLjcwNTg0Nw0KdnQgMC42ODQ1NDYgMC42NjA4NDcNCnZ0IDAuNjYyMjIyIDAuNjE1NjYyDQp2dCAwLjY1Mjg5MSAwLjU5Njc2MQ0KdnQgMC42NjIwMiAwLjYxNTIxNQ0KdnQgMC42ODQyNiAwLjY2MDIxNQ0KdnQgMC43MDY1ODQgMC43MDU0DQp2dCAwLjgzNjkwOCAwLjYzNDQxOA0KdnQgMC44MjI2MzcgMC42MTk3ODMNCnZ0IDAuNzg3OTI0IDAuNTg0MDUNCnZ0IDAuNzUzMTAzIDAuNTQ4MTQ4DQp2dCAwLjczODU3MiAwLjUzMzExDQp2dCAwLjc1Mjg0NCAwLjU0Nzc0NA0KdnQgMC43ODc1NTcgMC41ODM0NzcNCnZ0IDAuODIyMzc4IDAuNjE5Mzc5DQp2dCAwLjkyNDkyIDAuNTEwNTU1DQp2dCAwLjkwNjkwOCAwLjUwMTE4Ng0KdnQgMC44NjMxMjIgMC40NzgyMjENCnZ0IDAuODE5MjExIDAuNDU1MTEyDQp2dCAwLjgwMDg5OCAwLjQ0NTM5Ng0KdnQgMC44MTg5MSAwLjQ1NDc2Ng0KdnQgMC44NjI2OTYgMC40Nzc3MzENCnZ0IDAuOTA2NjA3IDAuNTAwODM5DQp2dCAwLjk3MTMzNSAwLjM2NDgzOA0KdnQgMC45NTEzNSAwLjM2MTY2Mg0KdnQgMC45MDI3NzkgMC4zNTM3MTgNCnZ0IDAuODU0MDc0IDAuMzQ1NjYNCnZ0IDAuODMzNzY2IDAuMzQyMjA4DQp2dCAwLjg1Mzc1MSAwLjM0NTM4Mw0KdnQgMC45MDIzMjIgMC4zNTMzMjcNCnZ0IDAuOTUxMDI2IDAuMzYxMzg1DQp2dCAwLjk3MTYyIDAuMjI5Mzg4DQp2dCAwLjk3MTYyIDAuMjI5Mzg4DQp2dCAwLjk1MTY5OCAwLjIyOTU4OQ0KdnQgMC45NTE2OTggMC4yMjk1ODkNCnZ0IDAuOTAzMDExIDAuMjI5NzYNCnZ0IDAuOTAzMDExIDAuMjI5NzYNCnZ0IDAuODU0MDc4IDAuMjI5ODAyDQp2dCAwLjg1NDA3OCAwLjIyOTgwMg0KdnQgMC44MzM1NjMgMC4yMjk2OQ0KdnQgMC44MzM1NjMgMC4yMjk2OQ0KdnQgMC44NTM0ODQgMC4yMjk0ODkNCnZ0IDAuODUzNDg0IDAuMjI5NDg5DQp2dCAwLjkwMjE3MSAwLjIyOTMxOA0KdnQgMC45MDIxNzEgMC4yMjkzMTgNCnZ0IDAuOTUxMTA1IDAuMjI5Mjc2DQp2dCAwLjk1MTEwNSAwLjIyOTI3Ng0KDQpnIGFyY2ggDQp1c2VtdGwgVGV4dHVyZV8wDQojIE51bWJlciBvZiBQb2x5Z29uczogOTANCmYgMS8xLzEgMi8yLzIgMy8zLzMgNC81LzUgDQpmIDUvNy83IDYvOC84IDIvMi8yIDEvMS8xIA0KZiAyLzIvMiA3LzkvOSA4LzEwLzEwIDMvMy8zIA0KZiA4LzExLzExIDkvMTIvMTIgMTAvMTQvMTQgMTEvMTYvMTYgMTIvMTgvMTggMTMvMjAvMjAgNC82LzYgMy80LzQgDQpmIDE0LzIyLzIyIDEvMS8xIDQvNS81IDEzLzIxLzIxIA0KZiA2LzgvOCAxNS8yMy8yMyA3LzkvOSAyLzIvMiANCmYgNy85LzkgMTYvMjQvMjQgOS8xMy8xMyA4LzEwLzEwIA0KZiAxNS8yMy8yMyAxNy8yNS8yNSAxNi8yNC8yNCA3LzkvOSANCmYgMTYvMjQvMjQgMTgvMjYvMjYgMTAvMTUvMTUgOS8xMy8xMyANCmYgMTcvMjUvMjUgMTkvMjcvMjcgMTgvMjYvMjYgMTYvMjQvMjQgDQpmIDE4LzI2LzI2IDIwLzI4LzI4IDExLzE3LzE3IDEwLzE1LzE1IA0KZiAxOS8yNy8yNyAyMS8yOS8yOSAyMC8yOC8yOCAxOC8yNi8yNiANCmYgMjAvMjgvMjggMjIvMzAvMzAgMTIvMTkvMTkgMTEvMTcvMTcgDQpmIDIxLzI5LzI5IDIzLzMxLzMxIDIyLzMwLzMwIDIwLzI4LzI4IA0KZiAyMi8zMC8zMCAxNC8yMi8yMiAxMy8yMS8yMSAxMi8xOS8xOSANCmYgMjMvMzEvMzEgMjQvMzIvMzIgMTQvMjIvMjIgMjIvMzAvMzAgDQpmIDI0LzMyLzMyIDUvNy83IDEvMS8xIDE0LzIyLzIyIA0KZiAyNS8zMy8zMyAyNi8zNC8zNCA2LzgvOCA1LzcvNyANCmYgMjYvMzQvMzQgMjcvMzUvMzUgMTUvMjMvMjMgNi84LzggDQpmIDI3LzM1LzM1IDI4LzM2LzM2IDE3LzI1LzI1IDE1LzIzLzIzIA0KZiAyOC8zNi8zNiAyOS8zNy8zNyAxOS8yNy8yNyAxNy8yNS8yNSANCmYgMjkvMzcvMzcgMzAvMzgvMzggMjEvMjkvMjkgMTkvMjcvMjcgDQpmIDMwLzM4LzM4IDMxLzM5LzM5IDIzLzMxLzMxIDIxLzI5LzI5IA0KZiAzMS8zOS8zOSAzMi80MC80MCAyNC8zMi8zMiAyMy8zMS8zMSANCmYgMzIvNDAvNDAgMjUvMzMvMzMgNS83LzcgMjQvMzIvMzIgDQpmIDMzLzQxLzQxIDM0LzQyLzQyIDI2LzM0LzM0IDI1LzMzLzMzIA0KZiAzNC80Mi80MiAzNS80My80MyAyNy8zNS8zNSAyNi8zNC8zNCANCmYgMzUvNDMvNDMgMzYvNDQvNDQgMjgvMzYvMzYgMjcvMzUvMzUgDQpmIDM2LzQ0LzQ0IDM3LzQ1LzQ1IDI5LzM3LzM3IDI4LzM2LzM2IA0KZiAzNy80NS80NSAzOC80Ni80NiAzMC8zOC8zOCAyOS8zNy8zNyANCmYgMzgvNDYvNDYgMzkvNDcvNDcgMzEvMzkvMzkgMzAvMzgvMzggDQpmIDM5LzQ3LzQ3IDQwLzQ4LzQ4IDMyLzQwLzQwIDMxLzM5LzM5IA0KZiA0MC80OC80OCAzMy80MS80MSAyNS8zMy8zMyAzMi80MC80MCANCmYgNDEvNDkvNDkgNDIvNTAvNTAgMzQvNDIvNDIgMzMvNDEvNDEgDQpmIDQyLzUwLzUwIDQzLzUxLzUxIDM1LzQzLzQzIDM0LzQyLzQyIA0KZiA0My81MS81MSA0NC81Mi81MiAzNi80NC80NCAzNS80My80MyANCmYgNDQvNTIvNTIgNDUvNTMvNTMgMzcvNDUvNDUgMzYvNDQvNDQgDQpmIDQ1LzUzLzUzIDQ2LzU0LzU0IDM4LzQ2LzQ2IDM3LzQ1LzQ1IA0KZiA0Ni81NC81NCA0Ny81NS81NSAzOS80Ny80NyAzOC80Ni80NiANCmYgNDcvNTUvNTUgNDgvNTYvNTYgNDAvNDgvNDggMzkvNDcvNDcgDQpmIDQ4LzU2LzU2IDQxLzQ5LzQ5IDMzLzQxLzQxIDQwLzQ4LzQ4IA0KZiA0OS81Ny81NyA1MC81OC81OCA0Mi81MC81MCA0MS80OS80OSANCmYgNTAvNTgvNTggNTEvNTkvNTkgNDMvNTEvNTEgNDIvNTAvNTAgDQpmIDUxLzU5LzU5IDUyLzYwLzYwIDQ0LzUyLzUyIDQzLzUxLzUxIA0KZiA1Mi82MC82MCA1My82MS82MSA0NS81My81MyA0NC81Mi81MiANCmYgNTMvNjEvNjEgNTQvNjIvNjIgNDYvNTQvNTQgNDUvNTMvNTMgDQpmIDU0LzYyLzYyIDU1LzYzLzYzIDQ3LzU1LzU1IDQ2LzU0LzU0IA0KZiA1NS82My82MyA1Ni82NC82NCA0OC81Ni81NiA0Ny81NS81NSANCmYgNTYvNjQvNjQgNDkvNTcvNTcgNDEvNDkvNDkgNDgvNTYvNTYgDQpmIDU3LzY1LzY1IDU4LzY2LzY2IDUwLzU4LzU4IDQ5LzU3LzU3IA0KZiA1OC82Ni82NiA1OS82Ny82NyA1MS81OS81OSA1MC81OC81OCANCmYgNTkvNjcvNjcgNjAvNjgvNjggNTIvNjAvNjAgNTEvNTkvNTkgDQpmIDYwLzY4LzY4IDYxLzY5LzY5IDUzLzYxLzYxIDUyLzYwLzYwIA0KZiA2MS82OS82OSA2Mi83MC83MCA1NC82Mi82MiA1My82MS82MSANCmYgNjIvNzAvNzAgNjMvNzEvNzEgNTUvNjMvNjMgNTQvNjIvNjIgDQpmIDYzLzcxLzcxIDY0LzcyLzcyIDU2LzY0LzY0IDU1LzYzLzYzIA0KZiA2NC83Mi83MiA1Ny82NS82NSA0OS81Ny81NyA1Ni82NC82NCANCmYgNjUvNzMvNzMgNjYvNzQvNzQgNTgvNjYvNjYgNTcvNjUvNjUgDQpmIDY2Lzc0Lzc0IDY3Lzc1Lzc1IDU5LzY3LzY3IDU4LzY2LzY2IA0KZiA2Ny83NS83NSA2OC83Ni83NiA2MC82OC82OCA1OS82Ny82NyANCmYgNjgvNzYvNzYgNjkvNzcvNzcgNjEvNjkvNjkgNjAvNjgvNjggDQpmIDY5Lzc3Lzc3IDcwLzc4Lzc4IDYyLzcwLzcwIDYxLzY5LzY5IA0KZiA3MC83OC83OCA3MS83OS83OSA2My83MS83MSA2Mi83MC83MCANCmYgNzEvNzkvNzkgNzIvODAvODAgNjQvNzIvNzIgNjMvNzEvNzEgDQpmIDcyLzgwLzgwIDY1LzczLzczIDU3LzY1LzY1IDY0LzcyLzcyIA0KZiA3My84MS84MSA3NC84Mi84MiA2Ni83NC83NCA2NS83My83MyANCmYgNzQvODIvODIgNzUvODMvODMgNjcvNzUvNzUgNjYvNzQvNzQgDQpmIDc1LzgzLzgzIDc2Lzg0Lzg0IDY4Lzc2Lzc2IDY3Lzc1Lzc1IA0KZiA3Ni84NC84NCA3Ny84NS84NSA2OS83Ny83NyA2OC83Ni83NiANCmYgNzcvODUvODUgNzgvODYvODYgNzAvNzgvNzggNjkvNzcvNzcgDQpmIDc4Lzg2Lzg2IDc5Lzg3Lzg3IDcxLzc5Lzc5IDcwLzc4Lzc4IA0KZiA3OS84Ny84NyA4MC84OC84OCA3Mi84MC84MCA3MS83OS83OSANCmYgODAvODgvODggNzMvODEvODEgNjUvNzMvNzMgNzIvODAvODAgDQpmIDgxLzg5Lzg5IDgyLzkwLzkwIDc0LzgyLzgyIDczLzgxLzgxIA0KZiA4Mi85MC85MCA4My85MS85MSA3NS84My84MyA3NC84Mi84MiANCmYgODMvOTEvOTEgODQvOTIvOTIgNzYvODQvODQgNzUvODMvODMgDQpmIDg0LzkyLzkyIDg1LzkzLzkzIDc3Lzg1Lzg1IDc2Lzg0Lzg0IA0KZiA4NS85My85MyA4Ni85NC85NCA3OC84Ni84NiA3Ny84NS84NSANCmYgODYvOTQvOTQgODcvOTUvOTUgNzkvODcvODcgNzgvODYvODYgDQpmIDg3Lzk1Lzk1IDg4Lzk2Lzk2IDgwLzg4Lzg4IDc5Lzg3Lzg3IA0KZiA4OC85Ni85NiA4MS84OS84OSA3My84MS84MSA4MC84OC84OCANCmYgODkvOTcvOTcgOTAvOTkvOTkgODIvOTAvOTAgODEvODkvODkgDQpmIDkwLzk5Lzk5IDkxLzEwMS8xMDEgODMvOTEvOTEgODIvOTAvOTAgDQpmIDkxLzEwMS8xMDEgOTIvMTAzLzEwMyA4NC85Mi85MiA4My85MS85MSANCmYgOTIvMTAzLzEwMyA5My8xMDUvMTA1IDg1LzkzLzkzIDg0LzkyLzkyIA0KZiA5My8xMDUvMTA1IDk0LzEwNy8xMDcgODYvOTQvOTQgODUvOTMvOTMgDQpmIDk0LzEwNy8xMDcgOTUvMTA5LzEwOSA4Ny85NS85NSA4Ni85NC85NCANCmYgOTUvMTA5LzEwOSA5Ni8xMTEvMTExIDg4Lzk2Lzk2IDg3Lzk1Lzk1IA0KZiA5Ni8xMTEvMTExIDg5Lzk3Lzk3IDgxLzg5Lzg5IDg4Lzk2Lzk2IA0KZiA5Ni8xMTIvMTEyIDk1LzExMC8xMTAgOTQvMTA4LzEwOCA5My8xMDYvMTA2IDkyLzEwNC8xMDQgOTEvMTAyLzEwMiA5MC8xMDAvMTAwIDg5Lzk4Lzk4IA0KIyBOdW1iZXIgb2YgdmVydGljZXM6IDQNCnYgLTE1Ljk5NTk4OCA0Ny45ODE2MzIgLTU1LjYwNDg3Nw0KdiAtMTUuOTk1OTQgNDcuOTgxNjg5IDYyLjM4MjQ5Ng0KdiAtMTUuOTk1OTg4IDE0LjIwOTkwMiAtNTUuNjA0ODQ3DQp2IC0xNS45OTU5NCAxNC4yMDk5NTcgNjIuMzgyNTI2DQoNCiMgTnVtYmVyIG9mIG5vcm1hbHM6IDQNCnZuIDEgMCAwDQp2biAxIDAgMA0Kdm4gMSAwIDANCnZuIDEgMCAwDQoNCiMgTnVtYmVyIG9mIHRleHR1cmUgdmVydGljZXM6IDQNCnZ0IDAgMC42NTE2NjQNCnZ0IDEgMC42NTE2NjQNCnZ0IDAgMC4zMzkwODcNCnZ0IDEgMC4zMzkwODcNCg0KZyB0ZXh0IA0KdXNlbXRsIFRleHR1cmVfMF8xDQojIE51bWJlciBvZiBQb2x5Z29uczogMQ0KZiA5Ny8xMTMvMTEzIDk4LzExNC8xMTQgMTAwLzExNi8xMTYgOTkvMTE1LzExNSA=",
    "rfgtg.mtl": "77u/IyBCbGVuZGVyIE1UTCBGaWxlOiAnTm9uZScNCiMgTWF0ZXJpYWwgQ291bnQ6IDENCg0KbmV3bXRsIExhc2VyRW5kDQpOcyA5MDANCkthIDEuMDAwMDAwIDEuMDAwMDAwIDEuMDAwMDAwDQpLZCAxLjAwMDAwMCAxLjAwMDAwMCAxLjAwMDAwMA0KS3MgMS4wMDAwMDAgMS4wMDAwMDAgMS4wMDAwMDANCktlIDEuMDAwMDAwIDEuMDAwMDAwIDEuMDAwMDAwDQpOaSAxLjAwMDAwMA0KZCAxLjAwMDAwMA0KaWxsdW0gMg0KbWFwX0tkIFRleHR1ci5qcGc=",
    "rfgtg.obj": "77u/IyBCbGVuZGVyIHYyLjc2IChzdWIgMCkgT0JKIEZpbGU6ICcnDQojIHd3dy5ibGVuZGVyLm9yZw0KbXRsbGliIGxhc2VyLm10bA0KbyBMYXNlckVuZA0KdiAxLjMxMDE0OCAwLjAwMDAwMCAtNy4wNzk3OTYNCnYgLTEuMzgzNDA4IC00LjE1NjkwOCAtNS43MTM2ODANCnYgLTUuNzQxNjY0IC0yLjU2OTExNiAtMy41MDMyNjgNCnYgLTUuNzQxNjY0IDIuNTY5MTI4IC0zLjUwMzI2OA0KdiAtMS4zODM0MDggNC4xNTY5MzIgLTUuNzEzNjgwDQp2IDUuNjk2Mzg4IDAuMDAwMDAwIC00LjQwMzUzMg0KdiAxLjMzODEyMCAtNi43MjYwMzYgLTIuMTkzMTIwDQp2IC01LjcxMzY4MCAtNC4xNTY5MjAgMS4zODM0MDgNCnYgLTUuNzEzNjgwIDQuMTU2OTIwIDEuMzgzNDA4DQp2IDEuMzM4MTMyIDYuNzI2MDQ4IC0yLjE5MzEyMA0KdiA1LjcxMzY4MCAtNC4xNTY5MjAgLTEuMzgzNDA4DQp2IC0xLjMzODEzMiAtNi43MjYwMzYgMi4xOTMxMjANCnYgLTEuMzM4MTMyIC02LjcyNjAzNiAyLjE5MzEyMA0KdiAtNS42OTYzODggMC4wMDAwMDAgNC40MDM1MzINCnYgLTEuMzM4MTMyIDYuNzI2MDQ4IDIuMTkzMTIwDQp2IDUuNzEzNjgwIDQuMTU2OTIwIC0xLjM4MzQwOA0KdiA1Ljc0MTY2NCAtMi41NjkxMTYgMy41MDMyNjgNCnYgNS43NDE2NjQgLTIuNTY5MTE2IDMuNTAzMjY4DQp2IDEuMzgzNDA4IC00LjE1NjkyMCA1LjcxMzY4MA0KdiAxLjM4MzQwOCAtNC4xNTY5MjAgNS43MTM2ODANCnYgLTEuMzEwMTQ4IDAuMDAwMDAwIDcuMDc5Nzk2DQp2IDEuMzgzNDA4IDQuMTU2OTIwIDUuNzEzNjgwDQp2IDUuNzQxNjY0IDIuNTY5MTE2IDMuNTAzMjY4DQp2dCAwLjI1MjU4NyAwLjY5MDk4Mw0KdnQgMC4wOTY0ODAgMC44MDkwMTcNCnZ0IDAuMDAwMDAwIDAuNTAwMDAwDQp2dCAwLjA5NjQ4MCAwLjE5MDk4Mw0KdnQgMC4yNTI1ODcgMC4zMDkwMTcNCnZ0IDAuMzQ1MTE0IDEuMDAwMDAwDQp2dCAwLjU5NzcwMSAwLjgwOTAxNw0KdnQgMC42NTQ4ODYgMS4wMDAwMDANCnZ0IDAuOTAzNTIwIDAuODA5MDE3DQp2dCAxLjAwMDAwMCAwLjUwMDAwMA0KdnQgMC44MTA5OTMgMC41MDAwMDANCnZ0IDAuMTg5MDA3IDAuNTAwMDAwDQp2dCAwLjQwMjI5OSAwLjgwOTAxNw0KdnQgMC43NDc0MTMgMC42OTA5ODMNCnZ0IDAuMzQ1MTE0IDAuMDAwMDAwDQp2dCAwLjQwMjI5OSAwLjE5MDk4Mw0KdnQgMC43NDc0MTMgMC4zMDkwMTcNCnZ0IDAuNTk3NzAxIDAuMTkwOTgzDQp2dCAxLjI1MjU4NyAwLjMwOTAxNw0KdnQgMS4wOTY0ODAgMC4xOTA5ODMNCnZ0IDEuMzQ1MTE0IDAuMDAwMDAwDQp2dCAwLjY1NDg4NiAwLjAwMDAwMA0KdnQgMC45MDM1MjAgMC4xOTA5ODMNCnZuIDAuNDUyMzAwIDAuMDAwMDAwIDAuODkxOTAwDQp2biAwLjQ0ODgwMCAwLjg1MDcwMCAwLjI3MzgwMA0Kdm4gMC40NDg4MDAgMC44NTA2MDAgMC4yNzM4MDANCnZuIDAuNDQzMTAwIDAuNTI1NzAwIC0wLjcyNjIwMA0Kdm4gLTAuNDQzMTAwIDAuNTI1NzAwIDAuNzI2MjAwDQp2biAtMC40NDg4MDAgMC44NTA2MDAgLTAuMjczODAwDQp2biAtMC40NDg4MDAgMC44NTA3MDAgLTAuMjczODAwDQp2biAtMC40NDMxMDAgLTAuNTI1NzAwIDAuNzI2MjAwDQp2biAtMS4wMDAwMDAgMC4wMDAwMDAgMC4wMDU3MDANCnZuIDAuNDQ4ODAwIC0wLjg1MDcwMCAwLjI3MzgwMA0Kdm4gLTAuNDQ4ODAwIC0wLjg1MDYwMCAtMC4yNzM4MDANCnZuIC0wLjQ0ODgwMCAtMC44NTA3MDAgLTAuMjczODAwDQp2biAxLjAwMDAwMCAwLjAwMDAwMCAtMC4wMDU3MDANCnZuIDAuNDQzMTAwIC0wLjUyNTcwMCAtMC43MjYyMDANCnZuIC0wLjQ1MjMwMCAtMC4wMDAwMDAgLTAuODkxOTAwDQp1c2VtdGwgTGFzZXJFbmQNCnMgb2ZmDQpmIDIzLzEvMSAyMi8yLzEgMjEvMy8xDQpmIDIxLzMvMSAxOS80LzEgMTcvNS8xDQpmIDIxLzMvMSAxNy81LzEgMjMvMS8xDQpmIDE1LzYvMiAyMi8yLzIgMjMvMS8yDQpmIDIzLzEvMyAxNi83LzMgMTAvOC8zDQpmIDIzLzEvMiAxMC84LzIgMTUvNi8yDQpmIDUvOS80IDEwLzgvNCAxNi83LzQNCmYgMS8xMC80IDE2LzcvNCA2LzExLzQNCmYgMTYvNy80IDEvMTAvNCA1LzkvNA0KZiAxNC8xMi81IDIxLzMvNSAyMi8yLzUNCmYgMjIvMi81IDE1LzYvNSA5LzEzLzUNCmYgMjIvMi81IDkvMTMvNSAxNC8xMi81DQpmIDkvMTMvNiAxNS82LzYgMTAvOC82DQpmIDEwLzgvNyA1LzkvNyA0LzE0LzcNCmYgMTAvOC83IDQvMTQvNyA5LzEzLzcNCmYgMTIvMTUvOCAxOS80LzggMjEvMy84DQpmIDIxLzMvOCAxNC8xMi84IDgvMTYvOA0KZiAyMS8zLzggOC8xNi84IDEyLzE1LzgNCmYgOC8xNi85IDE0LzEyLzkgOS8xMy85DQpmIDkvMTMvOSA0LzE0LzkgMy8xNy85DQpmIDkvMTMvOSAzLzE3LzkgOC8xNi85DQpmIDExLzE4LzEwIDE4LzE5LzEwIDIwLzIwLzEwDQpmIDIwLzIwLzEwIDEzLzIxLzEwIDcvMjIvMTANCmYgMjAvMjAvMTAgNy8yMi8xMCAxMS8xOC8xMA0KZiAyLzIzLzExIDcvMjIvMTEgMTMvMjEvMTENCmYgMTIvMTUvMTIgOC8xNi8xMiAzLzE3LzEyDQpmIDEzLzIxLzEyIDMvMTcvMTIgMi8yMy8xMg0KZiAxNi83LzEzIDIzLzEvMTMgMTcvNS8xMw0KZiAxOC8xOS8xMyAxMS8xOC8xMyA2LzExLzEzDQpmIDE4LzE5LzEzIDYvMTEvMTMgMTYvNy8xMw0KZiA2LzExLzE0IDExLzE4LzE0IDcvMjIvMTQNCmYgMS8xMC8xNCA3LzIyLzE0IDIvMjMvMTQNCmYgNy8yMi8xNCAxLzEwLzE0IDYvMTEvMTQNCmYgMS8xMC8xNSAyLzIzLzE1IDMvMTcvMTUNCmYgMy8xNy8xNSA0LzE0LzE1IDUvOS8xNQ0KZiAxLzEwLzE1IDMvMTcvMTUgNS85LzE1",
    "rfGsG.mtl": "77u/IyBDcmVhdGVkIEJ5IENhcnJhcmEgOC4wDQoNCm5ld210bCBUZXh0dXJlXzANCiBOcyAxNjMNCiBkIDENCiBOaSAwLjAwMQ0KIEttIDENCiBpbGx1bSAyDQogS2EgMC4yIDAuMiAwLjINCiBLZCAxIDEgMQ0KIEtzIDAuMjUgMC4yNSAwLjI1DQogbWFwX0tkIFRleHR1cmVfMC5wbmcNCg==",
    "rfGsG.obj": "77u/IyBDcmVhdGVkIEJ5IENhcnJhcmEgOC4wDQoNCm10bGxpYiBQb3dlci5NdGwNCg0KIyBOdW1iZXIgb2YgdmVydGljZXM6IDU4DQp2IC0yNy43MTYzODkgMCAxMS40ODA1MDYNCnYgLTExLjQ4MDUwOSAwIDI3LjcxNjM4NQ0KdiAxMS40ODA1MDkgMCAyNy43MTYzODUNCnYgMjcuNzE2Mzg5IDAgMTEuNDgwNDk0DQp2IDI3LjcxNjM4OSAwIC0xMS40ODA0OTkNCnYgMTEuNDgwNDk2IDAgLTI3LjcxNjM5Mw0KdiAtMTEuNDgwNTA5IDAgLTI3LjcxNjM4MQ0KdiAtMjcuNzE2Mzg5IDAgLTExLjQ4MDQ5OQ0KdiAtMjUuNjA2NTk2IDExLjQ4MDUwOSAxMC42MDY2MDYNCnYgLTEwLjYwNjYwOCAxMS40ODA1MDkgMjUuNjA2NjA2DQp2IDEwLjYwNjU5NiAxMS40ODA1MDkgMjUuNjA2NjA2DQp2IDI1LjYwNjU5NiAxMS40ODA1MDkgMTAuNjA2NTkzDQp2IDI1LjYwNjU5NiAxMS40ODA1MDkgLTEwLjYwNjU5OQ0KdiAxMC42MDY1OTYgMTEuNDgwNTA5IC0yNS42MDY1OTgNCnYgLTEwLjYwNjYwOCAxMS40ODA1MDkgLTI1LjYwNjU5OA0KdiAtMjUuNjA2NTk2IDExLjQ4MDUwOSAtMTAuNjA2NTk5DQp2IC0yNS42MDY1OTYgLTExLjQ4MDUwOSAxMC42MDY2MDYNCnYgLTEwLjYwNjYwOCAtMTEuNDgwNTA5IDI1LjYwNjYwNg0KdiAxMC42MDY1OTYgLTExLjQ4MDUwOSAyNS42MDY2MDYNCnYgMjUuNjA2NTk2IC0xMS40ODA1MDkgMTAuNjA2NTkzDQp2IDI1LjYwNjU5NiAtMTEuNDgwNTA5IC0xMC42MDY1OTkNCnYgMTAuNjA2NTk2IC0xMS40ODA1MDkgLTI1LjYwNjU5OA0KdiAtMTAuNjA2NjA4IC0xMS40ODA1MDkgLTI1LjYwNjU5OA0KdiAtMjUuNjA2NTk2IC0xMS40ODA1MDkgLTEwLjYwNjU5OQ0KdiAtMTkuNTk4NDQ4IDIxLjIxMzIwMyA4LjExNzkzNw0KdiAtOC4xMTc5NCAyMS4yMTMyMDMgMTkuNTk4NDQ2DQp2IDguMTE3OTQgMjEuMjEzMjAzIDE5LjU5ODQ0Ng0KdiAxOS41OTg0NDggMjEuMjEzMjAzIDguMTE3OTM3DQp2IDE5LjU5ODQzNiAyMS4yMTMyMDMgLTguMTE3OTQzDQp2IDguMTE3OTI4IDIxLjIxMzIwMyAtMTkuNTk4NDUNCnYgLTguMTE3OTUyIDIxLjIxMzIwMyAtMTkuNTk4NDM4DQp2IC0xOS41OTg0NDggMjEuMjEzMjAzIC04LjExNzk0Mw0KdiAtMTkuNTk4NDQ4IC0yMS4yMTMyMDMgOC4xMTc5MzcNCnYgLTguMTE3OTQgLTIxLjIxMzIwMyAxOS41OTg0NDYNCnYgOC4xMTc5NCAtMjEuMjEzMjAzIDE5LjU5ODQ0Ng0KdiAxOS41OTg0NDggLTIxLjIxMzIwMyA4LjExNzkzNw0KdiAxOS41OTg0MzYgLTIxLjIxMzIwMyAtOC4xMTc5NDMNCnYgOC4xMTc5MjggLTIxLjIxMzIwMyAtMTkuNTk4NDUNCnYgLTguMTE3OTUyIC0yMS4yMTMyMDMgLTE5LjU5ODQzOA0KdiAtMTkuNTk4NDQ4IC0yMS4yMTMyMDMgLTguMTE3OTQzDQp2IC0xMC42MDY2MDggMjcuNzE2Mzg5IDQuMzkzNDAxDQp2IC00LjM5MzQwNCAyNy43MTYzODkgMTAuNjA2NjA2DQp2IDQuMzkzNDA0IDI3LjcxNjM4OSAxMC42MDY2MDYNCnYgMTAuNjA2NTk2IDI3LjcxNjM4OSA0LjM5MzQwMQ0KdiAxMC42MDY1OTYgMjcuNzE2Mzg5IC00LjM5MzM5NA0KdiA0LjM5MzM5MiAyNy43MTYzODkgLTEwLjYwNjU5OQ0KdiAtNC4zOTM0MDQgMjcuNzE2Mzg5IC0xMC42MDY1OTkNCnYgLTEwLjYwNjYwOCAyNy43MTYzODkgLTQuMzkzMzk0DQp2IC0xMC42MDY2MDggLTI3LjcxNjM4OSA0LjM5MzQwMQ0KdiAtNC4zOTM0MDQgLTI3LjcxNjM4OSAxMC42MDY2MDYNCnYgNC4zOTM0MDQgLTI3LjcxNjM4OSAxMC42MDY2MDYNCnYgMTAuNjA2NTk2IC0yNy43MTYzODkgNC4zOTM0MDENCnYgMTAuNjA2NTk2IC0yNy43MTYzODkgLTQuMzkzMzk0DQp2IDQuMzkzMzkyIC0yNy43MTYzODkgLTEwLjYwNjU5OQ0KdiAtNC4zOTM0MDQgLTI3LjcxNjM4OSAtMTAuNjA2NTk5DQp2IC0xMC42MDY2MDggLTI3LjcxNjM4OSAtNC4zOTMzOTQNCnYgMCAtMzAgLTAuMDAwMDAzDQp2IDAgMzAgLTAuMDAwMDAzDQoNCiMgTnVtYmVyIG9mIG5vcm1hbHM6IDU4DQp2biAtMC45MjM4OCAwIDAuMzgyNjgzDQp2biAtMC4zODI2ODQgMCAwLjkyMzg4DQp2biAwLjM4MjY4NCAwIDAuOTIzODgNCnZuIDAuOTIzODggMCAwLjM4MjY4Mw0Kdm4gMC45MjM4OCAwIC0wLjM4MjY4Mw0Kdm4gMC4zODI2ODMgMCAtMC45MjM4OA0Kdm4gLTAuMzgyNjg0IDAgLTAuOTIzODgNCnZuIC0wLjkyMzg4IDAgLTAuMzgyNjgzDQp2biAtMC44NjA0ODQgMC4zNzgxNCAwLjM0MTQzNQ0Kdm4gLTAuMzY3MDIzIDAuMzc4MTM5IDAuODQ5ODg1DQp2biAwLjM0MTQzNSAwLjM3ODEzOSAwLjg2MDQ4NA0Kdm4gMC44NDk4ODUgMC4zNzgxMzkgMC4zNjcwMjMNCnZuIDAuODYwNDg0IDAuMzc4MTQgLTAuMzQxNDM1DQp2biAwLjM2NzAyMyAwLjM3ODE0IC0wLjg0OTg4NQ0Kdm4gLTAuMzQxNDM1IDAuMzc4MTM5IC0wLjg2MDQ4NA0Kdm4gLTAuODQ5ODg1IDAuMzc4MTM5IC0wLjM2NzAyMw0Kdm4gLTAuODQ5ODg1IC0wLjM3ODEzOSAwLjM2NzAyMw0Kdm4gLTAuMzQxNDM1IC0wLjM3ODEzOSAwLjg2MDQ4NA0Kdm4gMC4zNjcwMjMgLTAuMzc4MTQgMC44NDk4ODUNCnZuIDAuODYwNDg0IC0wLjM3ODEzOSAwLjM0MTQzNQ0Kdm4gMC44NDk4ODUgLTAuMzc4MTQgLTAuMzY3MDIzDQp2biAwLjM0MTQzNSAtMC4zNzgxMzkgLTAuODYwNDg0DQp2biAtMC4zNjcwMjMgLTAuMzc4MTM5IC0wLjg0OTg4NQ0Kdm4gLTAuODYwNDg0IC0wLjM3ODEzOSAtMC4zNDE0MzUNCnZuIC0wLjY3MDUxNSAwLjY5ODY0MSAwLjI0OTYyDQp2biAtMC4yOTc2MTggMC42OTg2NDEgMC42NTA2MzQNCnZuIDAuMjQ5NjIgMC42OTg2NDEgMC42NzA1MTUNCnZuIDAuNjUwNjM0IDAuNjk4NjQxIDAuMjk3NjE3DQp2biAwLjY3MDUxNSAwLjY5ODY0MSAtMC4yNDk2Mg0Kdm4gMC4yOTc2MTcgMC42OTg2NDEgLTAuNjUwNjM0DQp2biAtMC4yNDk2MiAwLjY5ODY0MSAtMC42NzA1MTUNCnZuIC0wLjY1MDYzNCAwLjY5ODY0MSAtMC4yOTc2MTgNCnZuIC0wLjY1MDYzNCAtMC42OTg2NDEgMC4yOTc2MTgNCnZuIC0wLjI0OTYyIC0wLjY5ODY0MSAwLjY3MDUxNQ0Kdm4gMC4yOTc2MTggLTAuNjk4NjQxIDAuNjUwNjM0DQp2biAwLjY3MDUxNSAtMC42OTg2NDEgMC4yNDk2Mg0Kdm4gMC42NTA2MzQgLTAuNjk4NjQxIC0wLjI5NzYxOA0Kdm4gMC4yNDk2MiAtMC42OTg2NDEgLTAuNjcwNTE1DQp2biAtMC4yOTc2MTggLTAuNjk4NjQxIC0wLjY1MDYzNA0Kdm4gLTAuNjcwNTE1IC0wLjY5ODY0MSAtMC4yNDk2Mg0Kdm4gLTAuMzkwNDUgMC45MTIwNTggMC4xMjUyOTMNCnZuIC0wLjE4NzQ5NCAwLjkxMjA1OCAwLjM2NDY4Ng0Kdm4gMC4xMjUyOTMgMC45MTIwNTggMC4zOTA0NQ0Kdm4gMC4zNjQ2ODUgMC45MTIwNTggMC4xODc0OTQNCnZuIDAuMzkwNDUgMC45MTIwNTggLTAuMTI1MjkzDQp2biAwLjE4NzQ5NCAwLjkxMjA1OCAtMC4zNjQ2ODUNCnZuIC0wLjEyNTI5MyAwLjkxMjA1OCAtMC4zOTA0NQ0Kdm4gLTAuMzY0Njg1IDAuOTEyMDU4IC0wLjE4NzQ5NA0Kdm4gLTAuMzY0Njg2IC0wLjkxMjA1OCAwLjE4NzQ5NA0Kdm4gLTAuMTI1MjkzIC0wLjkxMjA1OCAwLjM5MDQ1DQp2biAwLjE4NzQ5NCAtMC45MTIwNTggMC4zNjQ2ODUNCnZuIDAuMzkwNDUgLTAuOTEyMDU4IDAuMTI1MjkzDQp2biAwLjM2NDY4NiAtMC45MTIwNTggLTAuMTg3NDk0DQp2biAwLjEyNTI5MyAtMC45MTIwNTggLTAuMzkwNDUNCnZuIC0wLjE4NzQ5NCAtMC45MTIwNTggLTAuMzY0Njg1DQp2biAtMC4zOTA0NSAtMC45MTIwNTggLTAuMTI1MjkzDQp2biAwIC0xIDANCnZuIDAgMSAwDQoNCiMgTnVtYmVyIG9mIHRleHR1cmUgdmVydGljZXM6IDgyDQp2dCAwLjA2MjUgMC41DQp2dCAwLjA2MjUgMC41DQp2dCAwLjE4NzUgMC41DQp2dCAwLjMxMjUgMC41DQp2dCAwLjQzNzUgMC41DQp2dCAwLjU2MjUgMC41DQp2dCAwLjY4NzUgMC41DQp2dCAwLjgxMjUgMC41DQp2dCAwLjkzNzUgMC41DQp2dCAwLjA2MjUgMC42MjUNCnZ0IDAuMDYyNSAwLjYyNQ0KdnQgMC4xODc1IDAuNjI1DQp2dCAwLjMxMjUgMC42MjUNCnZ0IDAuNDM3NSAwLjYyNQ0KdnQgMC41NjI1IDAuNjI1DQp2dCAwLjY4NzUgMC42MjUNCnZ0IDAuODEyNSAwLjYyNQ0KdnQgMC45Mzc1IDAuNjI1DQp2dCAwLjA2MjUgMC4zNzUNCnZ0IDAuMDYyNSAwLjM3NQ0KdnQgMC4xODc1IDAuMzc1DQp2dCAwLjMxMjUgMC4zNzUNCnZ0IDAuNDM3NSAwLjM3NQ0KdnQgMC41NjI1IDAuMzc1DQp2dCAwLjY4NzUgMC4zNzUNCnZ0IDAuODEyNSAwLjM3NQ0KdnQgMC45Mzc1IDAuMzc1DQp2dCAwLjA2MjUgMC43NQ0KdnQgMC4wNjI1IDAuNzUNCnZ0IDAuMTg3NSAwLjc1DQp2dCAwLjMxMjUgMC43NQ0KdnQgMC40Mzc1IDAuNzUNCnZ0IDAuNTYyNSAwLjc1DQp2dCAwLjY4NzUgMC43NQ0KdnQgMC44MTI1IDAuNzUNCnZ0IDAuOTM3NSAwLjc1DQp2dCAwLjA2MjUgMC4yNQ0KdnQgMC4wNjI1IDAuMjUNCnZ0IDAuMTg3NSAwLjI1DQp2dCAwLjMxMjUgMC4yNQ0KdnQgMC40Mzc1IDAuMjUNCnZ0IDAuNTYyNSAwLjI1DQp2dCAwLjY4NzUgMC4yNQ0KdnQgMC44MTI1IDAuMjUNCnZ0IDAuOTM3NSAwLjI1DQp2dCAwLjA2MjUgMC44NzUNCnZ0IDAuMDYyNSAwLjg3NQ0KdnQgMC4xODc1IDAuODc1DQp2dCAwLjMxMjUgMC44NzUNCnZ0IDAuNDM3NSAwLjg3NQ0KdnQgMC40Mzc1IDAuODc1DQp2dCAwLjU2MjUgMC44NzUNCnZ0IDAuNjg3NSAwLjg3NQ0KdnQgMC44MTI1IDAuODc1DQp2dCAwLjkzNzUgMC44NzUNCnZ0IDAuMDYyNSAwLjEyNQ0KdnQgMC4wNjI1IDAuMTI1DQp2dCAwLjE4NzUgMC4xMjUNCnZ0IDAuMzEyNSAwLjEyNQ0KdnQgMC40Mzc1IDAuMTI1DQp2dCAwLjQzNzUgMC4xMjUNCnZ0IDAuNTYyNSAwLjEyNQ0KdnQgMC42ODc1IDAuMTI1DQp2dCAwLjgxMjUgMC4xMjUNCnZ0IDAuOTM3NSAwLjEyNQ0KdnQgMCAwDQp2dCAwIDANCnZ0IDAgMQ0KdnQgMCAxDQp2dCAtMC4wNjI1IDAuNQ0KdnQgLTAuMDYyNSAwLjYyNQ0KdnQgLTAuMDYyNSAwLjM3NQ0KdnQgLTAuMDYyNSAwLjc1DQp2dCAtMC4wNjI1IDAuMjUNCnZ0IC0wLjA2MjUgMC44NzUNCnZ0IC0wLjA2MjUgMC4xMjUNCnZ0IC0wLjE4NzUgMC4xMjUNCnZ0IC0wLjMxMjUgMC4xMjUNCnZ0IC0wLjQzNzUgMC4xMjUNCnZ0IC0wLjQzNzUgMC44NzUNCnZ0IC0wLjMxMjUgMC44NzUNCnZ0IC0wLjE4NzUgMC44NzUNCg0KZyBWZXJ0ZXhfT2JqZWN0IA0KdXNlbXRsIFRleHR1cmVfMA0KIyBOdW1iZXIgb2YgUG9seWdvbnM6IDY0DQpmIDEvMS8xIDIvMy8yIDEwLzEyLzEwIDkvMTAvOSANCmYgMi8zLzIgMy80LzMgMTEvMTMvMTEgMTAvMTIvMTAgDQpmIDMvNC8zIDQvNS80IDEyLzE0LzEyIDExLzEzLzExIA0KZiA0LzUvNCA1LzYvNSAxMy8xNS8xMyAxMi8xNC8xMiANCmYgNS82LzUgNi83LzYgMTQvMTYvMTQgMTMvMTUvMTMgDQpmIDYvNy82IDcvOC83IDE1LzE3LzE1IDE0LzE2LzE0IA0KZiA3LzgvNyA4LzkvOCAxNi8xOC8xNiAxNS8xNy8xNSANCmYgOC83MC84IDEvMi8xIDkvMTEvOSAxNi83MS8xNiANCmYgMTcvMTkvMTcgMTgvMjEvMTggMi8zLzIgMS8xLzEgDQpmIDE4LzIxLzE4IDE5LzIyLzE5IDMvNC8zIDIvMy8yIA0KZiAxOS8yMi8xOSAyMC8yMy8yMCA0LzUvNCAzLzQvMyANCmYgMjAvMjMvMjAgMjEvMjQvMjEgNS82LzUgNC81LzQgDQpmIDIxLzI0LzIxIDIyLzI1LzIyIDYvNy82IDUvNi81IA0KZiAyMi8yNS8yMiAyMy8yNi8yMyA3LzgvNyA2LzcvNiANCmYgMjMvMjYvMjMgMjQvMjcvMjQgOC85LzggNy84LzcgDQpmIDI0LzcyLzI0IDE3LzIwLzE3IDEvMi8xIDgvNzAvOCANCmYgOS8xMC85IDEwLzEyLzEwIDI2LzMwLzI2IDI1LzI4LzI1IA0KZiAxMC8xMi8xMCAxMS8xMy8xMSAyNy8zMS8yNyAyNi8zMC8yNiANCmYgMTEvMTMvMTEgMTIvMTQvMTIgMjgvMzIvMjggMjcvMzEvMjcgDQpmIDEyLzE0LzEyIDEzLzE1LzEzIDI5LzMzLzI5IDI4LzMyLzI4IA0KZiAxMy8xNS8xMyAxNC8xNi8xNCAzMC8zNC8zMCAyOS8zMy8yOSANCmYgMTQvMTYvMTQgMTUvMTcvMTUgMzEvMzUvMzEgMzAvMzQvMzAgDQpmIDE1LzE3LzE1IDE2LzE4LzE2IDMyLzM2LzMyIDMxLzM1LzMxIA0KZiAxNi83MS8xNiA5LzExLzkgMjUvMjkvMjUgMzIvNzMvMzIgDQpmIDMzLzM3LzMzIDM0LzM5LzM0IDE4LzIxLzE4IDE3LzE5LzE3IA0KZiAzNC8zOS8zNCAzNS80MC8zNSAxOS8yMi8xOSAxOC8yMS8xOCANCmYgMzUvNDAvMzUgMzYvNDEvMzYgMjAvMjMvMjAgMTkvMjIvMTkgDQpmIDM2LzQxLzM2IDM3LzQyLzM3IDIxLzI0LzIxIDIwLzIzLzIwIA0KZiAzNy80Mi8zNyAzOC80My8zOCAyMi8yNS8yMiAyMS8yNC8yMSANCmYgMzgvNDMvMzggMzkvNDQvMzkgMjMvMjYvMjMgMjIvMjUvMjIgDQpmIDM5LzQ0LzM5IDQwLzQ1LzQwIDI0LzI3LzI0IDIzLzI2LzIzIA0KZiA0MC83NC80MCAzMy8zOC8zMyAxNy8yMC8xNyAyNC83Mi8yNCANCmYgMjUvMjgvMjUgMjYvMzAvMjYgNDIvNDgvNDIgNDEvNDYvNDEgDQpmIDI2LzMwLzI2IDI3LzMxLzI3IDQzLzQ5LzQzIDQyLzQ4LzQyIA0KZiAyNy8zMS8yNyAyOC8zMi8yOCA0NC81MC80NCA0My80OS80MyANCmYgMjgvMzIvMjggMjkvMzMvMjkgNDUvNTIvNDUgNDQvNTAvNDQgDQpmIDI5LzMzLzI5IDMwLzM0LzMwIDQ2LzUzLzQ2IDQ1LzUyLzQ1IA0KZiAzMC8zNC8zMCAzMS8zNS8zMSA0Ny81NC80NyA0Ni81My80NiANCmYgMzEvMzUvMzEgMzIvMzYvMzIgNDgvNTUvNDggNDcvNTQvNDcgDQpmIDMyLzczLzMyIDI1LzI5LzI1IDQxLzQ3LzQxIDQ4Lzc1LzQ4IA0KZiA0OS81Ni80OSA1MC81OC81MCAzNC8zOS8zNCAzMy8zNy8zMyANCmYgNTAvNTgvNTAgNTEvNTkvNTEgMzUvNDAvMzUgMzQvMzkvMzQgDQpmIDUxLzU5LzUxIDUyLzYwLzUyIDM2LzQxLzM2IDM1LzQwLzM1IA0KZiA1Mi82MC81MiA1My82Mi81MyAzNy80Mi8zNyAzNi80MS8zNiANCmYgNTMvNjIvNTMgNTQvNjMvNTQgMzgvNDMvMzggMzcvNDIvMzcgDQpmIDU0LzYzLzU0IDU1LzY0LzU1IDM5LzQ0LzM5IDM4LzQzLzM4IA0KZiA1NS82NC81NSA1Ni82NS81NiA0MC80NS80MCAzOS80NC8zOSANCmYgNTYvNzYvNTYgNDkvNTcvNDkgMzMvMzgvMzMgNDAvNzQvNDAgDQpmIDU3LzY2LzU3IDU2Lzc2LzU2IDU1Lzc3LzU1IA0KZiA1Ny82Ni81NyA1NS83Ny81NSA1NC83OC81NCANCmYgNTcvNjYvNTcgNTQvNzgvNTQgNTMvNzkvNTMgDQpmIDU3LzY2LzU3IDUzLzc5LzUzIDUyLzYxLzUyIA0KZiA1Ny82Ny81NyA1Mi82MC81MiA1MS81OS81MSANCmYgNTcvNjcvNTcgNTEvNTkvNTEgNTAvNTgvNTAgDQpmIDU3LzY3LzU3IDUwLzU4LzUwIDQ5LzU2LzQ5IA0KZiA1Ny82Ni81NyA0OS81Ny80OSA1Ni83Ni81NiANCmYgNTgvNjgvNTggNDEvNDYvNDEgNDIvNDgvNDIgDQpmIDU4LzY4LzU4IDQyLzQ4LzQyIDQzLzQ5LzQzIA0KZiA1OC82OC81OCA0My80OS80MyA0NC81MC80NCANCmYgNTgvNjkvNTggNDQvNTEvNDQgNDUvODAvNDUgDQpmIDU4LzY5LzU4IDQ1LzgwLzQ1IDQ2LzgxLzQ2IA0KZiA1OC82OS81OCA0Ni84MS80NiA0Ny84Mi80NyANCmYgNTgvNjkvNTggNDcvODIvNDcgNDgvNzUvNDggDQpmIDU4LzY5LzU4IDQ4Lzc1LzQ4IDQxLzQ3LzQxIA==",
    "rfGuB.mtl": "77u/IyBDcmVhdGVkIEJ5IENhcnJhcmEgOC4wDQoNCm5ld210bCBUZXh0dXJlXzANCiBOcyAxMDI0DQogZCAxDQogTmkgMC4wMDENCiBLbSAxDQogaWxsdW0gMg0KIEthIDAuMiAwLjIgMC4yDQogS2QgMSAxIDENCiBLcyAwIDAgMA0KIG1hcF9LZCBUZXh0dXJlXzAucG5nDQoNCm5ld210bCBUZXh0dXJlXzENCiBOcyAxMDI0DQogZCAxDQogTmkgMC4wMDENCiBLbSAxDQogaWxsdW0gMg0KIEthIDAuMiAwLjIgMC4yDQogS2QgMSAxIDENCiBLcyAwIDAgMA0KIG1hcF9LZCBUZXh0dXJlXzAucG5nDQoNCm5ld210bCBUZXh0dXJlXzINCiBOcyAxMDI0DQogZCAxDQogTmkgMC4wMDENCiBLbSAxDQogaWxsdW0gMg0KIEthIDAuMiAwLjIgMC4yDQogS2QgMSAxIDENCiBLcyAwIDAgMA0KIG1hcF9LZCBUZXh0dXJlXzAucG5nDQoNCm5ld210bCBUZXh0dXJlXzBfMQ0KIE5zIDEwMjQNCiBkIDENCiBOaSAwLjAwMQ0KIEttIDENCiBpbGx1bSAyDQogS2EgMC4yIDAuMiAwLjINCiBLZCAxIDEgMQ0KIEtzIDAgMCAwDQogbWFwX0tkIFRleHR1cmVfMDIucG5nDQo=",
    "rfGuB.obj": "77u/IyBDcmVhdGVkIEJ5IENhcnJhcmEgOC4wDQoNCm10bGxpYiBhcmNoRmluaXNoLk10bA0KDQojIE51bWJlciBvZiB2ZXJ0aWNlczogOTgNCnYgMC4wOTkwMzMgLTI2LjY0MDI4NCAtOTMuODk1MzI1DQp2IDkuOTE3NTkxIC0yNy4yNDE4NTQgLTg5Ljg5MjI0Mg0KdiA5LjQ0NTg4NSAtNTIuMTczMDY5IC04OS43NDA1MDENCnYgLTAuMzY5NTQxIC01Mi4xOTU1OCAtOTMuNzUzNTc4DQp2IDAuMDIyNDY1IDEuNjcwODAxIC04NC43NTQwMDUNCnYgOS44NDQyNjkgLTAuMTM0MTE5IC04MS4xMzk0NzMNCnYgMTMuOTk4MDI0IC0yOC43NDc4NzcgLTgwLjIwMzQ2MQ0KdiAxMy42OTIwNyAtNTIuMTc5NTg1IC04MC4wODA2NDMNCnYgOS44ODE2NjQgLTUyLjIxMTM3MiAtNzAuNDMyNjQ4DQp2IDAuMjQ2NzU0IC01Mi4yNDk3NiAtNjYuNDQ4MTUxDQp2IC05LjU2ODY4MiAtNTIuMjcyMjgyIC03MC40NjEyMDUNCnYgLTEzLjgxNDg2OSAtNTIuMjY1NzU1IC04MC4xMjEwNjMNCnYgLTEwLjAwNDQ2MSAtNTIuMjMzOTY3IC04OS43NjkwNDMNCnYgLTkuNzA2MDQ1IC0yNy4yOTU0ODMgLTg5Ljg2NzcyMg0KdiAxMy45MzI1OTggLTQuNTU4NzIzIC03Mi4zOTMwNTkNCnYgOS45NTAwNzMgLTMwLjI3NjAwNSAtNzAuNTA0NTM5DQp2IDkuODkyNTU5IC05LjAxMDk0IC02My42MzgyOTQNCnYgMC4xNDQ5OTcgLTMwLjkzMTEzMyAtNjYuNDc2OTY3DQp2IDAuMDkwNzY1IC0xMC44ODI3OTQgLTYwLjAwMzU4Ng0KdiAtOS42NzM1NjEgLTMwLjMyOTYzNCAtNzAuNDgwMDE5DQp2IC05LjczMTA0MSAtOS4wNzc4ODggLTYzLjYxODA5NQ0KdiAtMTMuNzUzOTk0IC0yOC44MjM1MzggLTgwLjE2ODgNCnYgLTEzLjgxOTM1NyAtNC42NTMzNDMgLTcyLjM2NDUxDQp2IC05Ljc3OTMyOSAtMC4yMDExMzkgLTgxLjExOTI3OA0KdiAtMC4wNTI1NDkgMjUuNzcxMzc2IC02Ny4zMTE0MzINCnYgOS43NzI0NDkgMjIuOTQxOTc3IC02NC40MzgyNzgNCnYgMTMuODY4NTA3IDE2LjAzMzAxMiAtNTcuNDg5OTk4DQp2IDkuODM2MjIgOS4wOTE2NDkgLTUwLjUzNjc1NQ0KdiAwLjAzNzY1NSA2LjE4MzkxNyAtNDcuNjUxNjk5DQp2IC05Ljc4NzM0NiA5LjAxMzIyOCAtNTAuNTI0ODI2DQp2IC0xMy44ODM0MDEgMTUuOTIyMTk0IC01Ny40NzMxMQ0KdiAtOS44NTExMTQgMjIuODYzNjMgLTY0LjQyNjM0Ng0KdiAtMC4xMTg2NzEgNDMuMzAyMjU4IC00My4yNzUwNDcNCnYgOS43MDkxMjYgMzkuNzI3ODUyIC00MS40MjM1NTMNCnYgMTMuODEyMDEyIDMxLjAxMTU3IC0zNi45NTMxMjUNCnYgOS43ODY1NTIgMjIuMjU5NTg2IC0zMi40ODI0NTINCnYgLTAuMDA5MTgyIDE4LjU5ODM5OCAtMzAuNjMwNDIxDQp2IC05LjgzNjk3NyAyMi4xNzI3OTEgLTMyLjQ4MTkxMQ0KdiAtMTMuOTM5ODYxIDMwLjg4OTA3MiAtMzYuOTUyMzMyDQp2IC05LjkxNDQwMiAzOS42NDExMjkgLTQxLjQyMjk4MQ0KdiAtMC4xNjk0MyA1Mi41NDc1MTIgLTE0Ljk5NzcwOA0KdiA5LjY2MDUyNiA0OC41ODAwODYgLTE0LjM0ODEyNQ0KdiAxMy43Njg2MjcgMzguOTEwODA5IC0xMi43OTI3NTcNCnYgOS43NDg0MjUgMjkuMjAzOTEzIC0xMS4yNDI2NjgNCnYgLTAuMDQ1MTIyIDI1LjE0NTQxOCAtMTAuNjA1OTM2DQp2IC05Ljg3NTA5IDI5LjExMjc5OSAtMTEuMjU1NTINCnYgLTEzLjk4MzE5MyAzOC43ODIwNjMgLTEyLjgxMDg4OA0KdiAtOS45NjI5NzYgNDguNDg5MDI1IC0xNC4zNjA5NDENCnYgLTAuMTk5ODYgNTIuNjAyMTEyIDE0Ljc1MjU5Ng0KdiA5LjYzMTQwMSA0OC42MzIzMzYgMTQuMTM3NjU2DQp2IDEzLjc0MjY0MSAzOC45NTc0MjggMTIuNjI2MTM3DQp2IDkuNzI1NTY3IDI5LjI0NDgzMyAxMS4xMDM1MDQNCnYgLTAuMDY2NjYyIDI1LjE4NDAxIDEwLjQ2MTYzNg0KdiAtOS44OTc5MjYgMjkuMTUzNzkxIDExLjA3NjU2NA0KdiAtMTQuMDA5MTYxIDM4LjgyODYyMSAxMi41ODgwOTcNCnYgLTkuOTkyMDg4IDQ4LjU0MTIxOCAxNC4xMTA3NjQNCnYgLTAuMjA2OTc4IDQzLjQ2MDcyOCA0My4wNjM3NA0KdiA5LjYyNDU3NyAzOS44Nzk0NTkgNDEuMjQ1NDM4DQp2IDEzLjczNjU2NSAzMS4xNDY5NzYgMzYuODE1Mzk5DQp2IDkuNzIwMjI2IDIyLjM3ODUxNyAzMi4zNjg2OQ0KdiAtMC4wNzE3MDEgMTguNzEwNTg3IDMwLjUxMDA4Mg0KdiAtOS45MDMyNjcgMjIuMjkxNzk0IDMyLjMyODM1DQp2IC0xNC4wMTUyMzQgMzEuMDI0Mjc5IDM2Ljc1ODQNCnYgLTkuOTk4ODk0IDM5Ljc5MjY2NCA0MS4yMDUxNDcNCnYgLTAuMTkwMDcxIDI2LjAxODE1NiA2Ny4xNjQzOTgNCnYgOS42NDA3NjIgMjMuMTc4MjQ3IDY0LjMyMTcwOQ0KdiAxMy43NTEwMDMgMTYuMjQzODg5IDU3LjQwNzE5Ng0KdiA5LjczMjkyMiA5LjI3Njk3NyA1MC40NzEyOTQNCnYgLTAuMDU5NzM2IDYuMzU4NjYxIDQ3LjU3Njg5Mw0KdiAtOS44OTA1NyA5LjE5ODQ5NyA1MC40MTk1NDgNCnYgLTE0LjAwMDgxMSAxNi4xMzI4NTQgNTcuMzM0MDY4DQp2IC05Ljk4MjcyOSAyMy4wOTk3NjYgNjQuMjcwMDA0DQp2IC0wLjE1MDgyOSAxLjk4MTg1MyA4NC42OTU0MTkNCnYgOS42NzgzNDkgMC4xNjM2MTMgODEuMTA3NTgyDQp2IDEzLjc4NDUzMSAtNC4yOTI4NjMgNzIuMzg1ODQ5DQp2IDkuNzYyMzk0IC04Ljc3NzIwMyA2My42MzkyOQ0KdiAtMC4wMzE5NDQgLTEwLjY2MjU5NSA1OS45OTE0MzINCnYgLTkuODYxMTExIC04Ljg0NDM1NiA2My41NzkyNDMNCnYgLTEzLjk2NzI5MyAtNC4zODc4OTEgNzIuMzAwOTg3DQp2IC05Ljk0NTE1NiAwLjA5NjQ2MSA4MS4wNDc1NjkNCnYgLTAuMDkzMDYxIC0yNi4yOTU1MjEgOTMuOTQwNzY1DQp2IDkuNzMzNjU0IC0yNi45MTE3ODMgODkuOTU5OTYxDQp2IDEzLjgzMzg4NSAtMjguNDUzMzAyIDgwLjI4NTE0OQ0KdiA5LjgwNTc3NSAtMzAuMDE3MDcxIDcwLjU4MzY3Mg0KdiAwLjAwODk2MyAtMzAuNjg3MDMxIDY2LjUzODQ4Mw0KdiAtOS44MTc3NTUgLTMwLjA3MDc1NyA3MC41MTkyNTcNCnYgLTEzLjkxNzk4NSAtMjguNTI5MjQ5IDgwLjE5NDA2OQ0KdiAtOS44ODk4NzQgLTI2Ljk2NTYxNiA4OS44OTU1NTQNCnYgLTAuMDY3NDQgLTUyLjU4MDMxMSA5My45OTc0OTgNCnYgOS43NTQxMjggLTUyLjU0MTM4NiA5MC4wMjkzNDMNCnYgMTQuMDE1MjQ0IC01Mi41MDgxMDYgODAuMzMxMzE0DQp2IDEwLjIxOTc4OCAtNTIuNDk5OTY5IDcwLjU4NDMxMg0KdiAwLjU5MTEwNiAtNTIuNTIxNzc4IDY2LjQ5Nzk0DQp2IC05LjIzMDQ3MyAtNTIuNTYwNzAzIDcwLjQ2NjA0OQ0KdiAtMTMuNDkxNTkgLTUyLjU5Mzk4MyA4MC4xNjQwNzgNCnYgLTkuNjk2MTMzIC01Mi42MDIxMTYgODkuOTExMDg3DQp2IC0wLjA2MTM5OCAtNTIuMjIyNjc1IC04MC4xMDA4NTMNCnYgMC4yNjE4MzEgLTUyLjU1MTAzNyA4MC4yNDc3MDQNCg0KIyBOdW1iZXIgb2Ygbm9ybWFsczogMTE0DQp2biAtMC4wMjcxMjIgMC4xNjI0MDMgLTAuOTg2MzUyDQp2biAwLjY2NTA5MyAwLjEwNzc4NyAtMC43Mzg5NDENCnZuIDAuNzM4MjI1IC0wLjAxNTY1NSAtMC42NzQzNzMNCnZuIDAuMDAzMTM1IC0wLjk5OTk5MyAtMC4wMDIwNTQNCnZuIC0wLjAwNDc2OSAtMC4wMDYwOTkgLTAuOTk5OTcNCnZuIDAuMDAzMTM0IC0wLjk5OTk5MyAtMC4wMDIwNTUNCnZuIC0wLjAwMjQ0NiAwLjQ1MjMyNSAtMC44OTE4NQ0Kdm4gMC43MDE2MzkgMC4zMzAxMzggLTAuNjMxNDM2DQp2biAwLjk5NzcxNyAwLjAwMzA2OSAtMC4wNjc0NjUNCnZuIDAuOTk4OTQ4IC0wLjAwOTIzMyAwLjA0NDkxNA0Kdm4gMC4wMDMxMzYgLTAuOTk5OTkzIC0wLjAwMjA1NQ0Kdm4gMC42NjczMTYgMC4wMDA4NzMgMC43NDQ3NzQNCnZuIDAuMDAzMTM1IC0wLjk5OTk5MyAtMC4wMDIwNTUNCnZuIDAuMDAyMDAzIDAuMDAxMzYxIDAuOTk5OTk3DQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU1DQp2biAtMC42NTQyNjQgLTAuMDAyMjg5IDAuNzU2MjYzDQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU0DQp2biAtMC45OTcxMjQgLTAuMDAwMjc1IDAuMDc1NzkzDQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU1DQp2biAtMC43NTEwOTUgMC4wMDI5NTkgLTAuNjYwMTg4DQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU2DQp2biAtMC43MDIzOTcgMC4xMDQ0OTYgLTAuNzA0MDczDQp2biAwLjk5OTg4MiAwLjAxNDgwNSAtMC4wMDQxMzkNCnZuIDAuNzU1NTQ5IC0wLjEwMjg4MSAwLjY0Njk2Mw0Kdm4gMC43MTMxMyAtMC4zMTA4MDkgMC42MjgzNjUNCnZuIDAuMDMwOTQ3IC0wLjE0Mzc0NSAwLjk4OTEzMQ0Kdm4gMC4wMDI0ODMgLTAuNDUyMzMyIDAuODkxODQ2DQp2biAtMC43MTA0NjIgLTAuMTE0Nzc4IDAuNjk0MzEzDQp2biAtMC43MDk2NTUgLTAuMzI0OTQzIDAuNjI1MTQxDQp2biAtMC45OTk5NDggLTAuMDA1NzQyIC0wLjAwODQ0NA0Kdm4gLTAuOTk5OTIxIC0wLjAwNzYyMyAtMC4wMTAwMDMNCnZuIC0wLjcwNTExOSAwLjMxMjg1MyAtMC42MzYzNDENCnZuIC0wLjAwMzIzMyAwLjcwNTc4MiAtMC43MDg0MjENCnZuIDAuNzAxMDggMC41MDk0MDYgLTAuNDk4OTkyDQp2biAwLjk5OTg3NSAwLjAxNTc5IC0wLjAwMDA0Ng0Kdm4gMC43MTM2ODYgLTAuNDg5NDY1IDAuNTAxMDc2DQp2biAwLjAwMzI3MiAtMC43MDU3ODcgMC43MDg0MTYNCnZuIC0wLjcwOTEgLTAuNTAyNTI0IDAuNDk0NjE3DQp2biAtMC45OTk5MjcgLTAuMDA0NTkgLTAuMDExMTg1DQp2biAtMC43MDU2OCAwLjQ5Mzg3NyAtMC41MDgwMzYNCnZuIC0wLjAwMzkzIDAuODkwMTUxIC0wLjQ1NTY0OQ0Kdm4gMC43MDA1ODUgMC42Mzg5NzQgLTAuMzE3NjM2DQp2biAwLjk5OTg3MiAwLjAxNTQ2MSAwLjAwNDE1Mw0Kdm4gMC43MTQxNzYgLTAuNjIwMDQxIDAuMzI0ODExDQp2biAwLjAwMzk2OSAtMC44OTAxNTQgMC40NTU2NDINCnZuIC0wLjcwODYxMiAtMC42MzEwOCAwLjMxNTYwNw0Kdm4gLTAuOTk5OTM0IC0wLjAwMTMzOSAtMC4wMTEzNzINCnZuIC0wLjcwNjE3NSAwLjYyNjM5NCAtMC4zMzAwNzINCnZuIC0wLjAwNDQ2MyAwLjk4NzM4NSAtMC4xNTgyNzQNCnZuIDAuNzAwMjExIDAuNzA2MTU2IC0wLjEwNTExNQ0Kdm4gMC45OTk4NzIgMC4wMTM4NTMgMC4wMDgwNDMNCnZuIDAuNzE0NTUzIC0wLjY4OTc1OSAwLjExNjgyMQ0Kdm4gMC4wMDQ1MDIgLTAuOTg3Mzg2IDAuMTU4MjY1DQp2biAtMC43MDgyNCAtMC42OTgwMjUgMC4xMDU2Mw0Kdm4gLTAuOTk5OTQzIDAuMDAxODA5IC0wLjAxMDU0NA0Kdm4gLTAuNzA2NTU4IDAuNjk3NDI5IC0wLjExOTg2OA0Kdm4gLTAuMDA0Nzg0IDAuOTg3OTY3IDAuMTU0NTkzDQp2biAwLjY5OTk4OSAwLjcwNDM3NyAwLjExNzc2Mw0Kdm4gMC45OTk4NzUgMC4wMTExMjEgMC4wMTEyNDYNCnZuIDAuNzE0NzgxIC0wLjY5MTc5MiAtMC4xMDI1MzINCnZuIDAuMDA0ODE4IC0wLjk4Nzk2NSAtMC4xNTQ2MDENCnZuIC0wLjcwODAyIC0wLjY5NjgwNyAtMC4xMTQ3NTUNCnZuIC0wLjk5OTk1MSAwLjAwNDU0NyAtMC4wMDg3ODUNCnZuIC0wLjcwNjc5MiAwLjcwMDAzIDAuMTAxOTk4DQp2biAtMC4wMDQ4NTcgMC44OTE4MzkgMC40NTIzMjcNCnZuIDAuNjk5OTQyIDAuNjMzODE0IDAuMzI5MTg0DQp2biAwLjk5OTg4MSAwLjAwNzUzNCAwLjAxMzQ0OA0Kdm4gMC43MTQ4MzcgLTAuNjI1OTQyIC0wLjMxMTc3Ng0Kdm4gMC4wMDQ4OTMgLTAuODkxODM1IC0wLjQ1MjMzNA0Kdm4gLTAuNzA3OTcxIC0wLjYyNzU0NyAtMC4zMjM5NzkNCnZuIC0wLjk5OTk1OSAwLjAwNjYxIC0wLjAwNjI2NQ0Kdm4gLTAuNzA2ODUxIDAuNjMzOTQ0IDAuMzEzODA5DQp2biAtMC4wMDQ2NzcgMC43MDg0MTEgMC43MDU3ODQNCnZuIDAuNzAwMDc0IDAuNTAxMzcxIDAuNTA4NDUyDQp2biAwLjk5OTg5IDAuMDAzNDQgMC4wMTQ0MzQNCnZuIDAuNzE0NzE3IC0wLjQ5ODY1NSAtMC40OTA0MzINCnZuIDAuMDA0NzE2IC0wLjcwODQwNSAtMC43MDU3OQ0Kdm4gLTAuNzA4MSAtMC40OTcwMjMgLTAuNTAxNTU5DQp2biAtMC45OTk5NjQgMC4wMDc3OSAtMC4wMDMyMzMNCnZuIC0wLjcwNjczIDAuNTA1NjQxIDAuNDk0ODM0DQp2biAtMC4wMDQyNjUgMC40NTU2MzggMC44OTAxNTUNCnZuIDAuNzAwMzcyIDAuMzIwMDE1IDAuNjM4MDINCnZuIDAuOTk5OSAtMC4wMDA3NTggMC4wMTQxMDYNCnZuIDAuNzE0NDMyIC0wLjMyMjM4OSAtMC42MjEwMDkNCnZuIDAuMDA0MzA0IC0wLjQ1NTYzIC0wLjg5MDE1OQ0Kdm4gLTAuNzA4Mzk2IC0wLjMxODAxMiAtMC42MzAxMTQNCnZuIC0wLjk5OTk2OCAwLjAwNzk3NyAwLjAwMDAxNw0Kdm4gLTAuNzA2NDQyIDAuMzI3Njc3IDAuNjI3MzUNCnZuIDAuMDIxNzU2IDAuMTY4MDIgMC45ODU1NDQNCnZuIDAuNjk5MDk2IDAuMTA2NjA3IDAuNzA3MDM2DQp2biAwLjk5OTg2NCAtMC4wMDMyOTQgMC4wMTYxNzcNCnZuIDAuNzE2MjI5IC0wLjEwOTg0NiAtMC42ODkxNjYNCnZuIC0wLjAyNzE1NCAtMC4xNDYwNzcgLTAuOTg4OQ0Kdm4gLTAuNzUwMDEzIC0wLjExMTcyMSAtMC42NTE5MTkNCnZuIC0wLjk5ODI5IDAuMDAxNDU5IDAuMDU4NDMNCnZuIC0wLjY2OTYyNSAwLjExNDA2OCAwLjczMzg4Nw0Kdm4gLTAuMDA3Mzk5IDAuMDAwNzg5IDAuOTk5OTcyDQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU0DQp2biAwLjczNjUxMiAwLjAwNDkxNSAwLjY3NjQwNw0Kdm4gMC4wMDMxMzQgLTAuOTk5OTkzIC0wLjAwMjA1NA0Kdm4gMC45OTkwODcgMC4wMTIwMDMgLTAuMDQxMDAyDQp2biAwLjAwMzEzNCAtMC45OTk5OTMgLTAuMDAyMDU1DQp2biAwLjY3MzQ4NCAwLjAxNDQ0NCAtMC43MzkwNg0Kdm4gMC4wMDMxMzUgLTAuOTk5OTkzIC0wLjAwMjA1NA0Kdm4gMC4wMDg2OSAwLjAwMjA4OCAtMC45OTk5Ng0Kdm4gMC4wMDMxMzUgLTAuOTk5OTkzIC0wLjAwMjA1Mw0Kdm4gLTAuNjUyMTAzIC0wLjAxNTUxNyAtMC43NTc5NzINCnZuIDAuMDAzMTM0IC0wLjk5OTk5MyAtMC4wMDIwNTQNCnZuIC0wLjk5NjgwMSAtMC4wMjA2MDYgLTAuMDc3MjI2DQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU1DQp2biAtMC43NTM1OTEgLTAuMDA5NjM0IDAuNjU3MjczDQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU0DQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU1DQp2biAwLjAwMzEzNSAtMC45OTk5OTMgLTAuMDAyMDU0DQoNCiMgTnVtYmVyIG9mIHRleHR1cmUgdmVydGljZXM6IDExNA0KdnQgMC4wOSAwLjg1DQp2dCAwLjA5IDAuODENCnZ0IDAgMC44MQ0KdnQgMCAwLjgxDQp2dCAwIDAuODUNCnZ0IDAgMC44NQ0KdnQgMC4xOCAwLjg1DQp2dCAwLjE4IDAuODENCnZ0IDAuMDkgMC43OA0KdnQgMCAwLjc4DQp2dCAwIDAuNzgNCnZ0IDAgMC43NQ0KdnQgMCAwLjc1DQp2dCAwIDAuNzENCnZ0IDAgMC43MQ0KdnQgMCAwLjc1DQp2dCAwIDAuNzUNCnZ0IDAgMC43OA0KdnQgMCAwLjc4DQp2dCAwIDAuODENCnZ0IDAgMC44MQ0KdnQgMC4wOSAwLjgxDQp2dCAwLjE4IDAuNzgNCnZ0IDAuMDkgMC43NQ0KdnQgMC4xOCAwLjc1DQp2dCAwLjA5IDAuNzENCnZ0IDAuMTggMC43MQ0KdnQgMC4wOSAwLjc1DQp2dCAwLjE4IDAuNzUNCnZ0IDAuMDkgMC43OA0KdnQgMC4xOCAwLjc4DQp2dCAwLjE4IDAuODENCnZ0IDAuMjcgMC44NQ0KdnQgMC4yNyAwLjgxDQp2dCAwLjI3IDAuNzgNCnZ0IDAuMjcgMC43NQ0KdnQgMC4yNyAwLjcxDQp2dCAwLjI3IDAuNzUNCnZ0IDAuMjcgMC43OA0KdnQgMC4yNyAwLjgxDQp2dCAwLjM2IDAuODUNCnZ0IDAuMzYgMC44MQ0KdnQgMC4zNiAwLjc4DQp2dCAwLjM2IDAuNzUNCnZ0IDAuMzYgMC43MQ0KdnQgMC4zNiAwLjc1DQp2dCAwLjM2IDAuNzgNCnZ0IDAuMzYgMC44MQ0KdnQgMC40NSAwLjg1DQp2dCAwLjQ1IDAuODENCnZ0IDAuNDUgMC43OA0KdnQgMC40NSAwLjc1DQp2dCAwLjQ1IDAuNzENCnZ0IDAuNDUgMC43NQ0KdnQgMC40NSAwLjc4DQp2dCAwLjQ1IDAuODENCnZ0IDAuNTQgMC44NQ0KdnQgMC41NCAwLjgxDQp2dCAwLjU0IDAuNzgNCnZ0IDAuNTQgMC43NQ0KdnQgMC41NCAwLjcxDQp2dCAwLjU0IDAuNzUNCnZ0IDAuNTQgMC43OA0KdnQgMC41NCAwLjgxDQp2dCAwLjYzIDAuODUNCnZ0IDAuNjMgMC44MQ0KdnQgMC42MyAwLjc4DQp2dCAwLjYzIDAuNzUNCnZ0IDAuNjMgMC43MQ0KdnQgMC42MyAwLjc1DQp2dCAwLjYzIDAuNzgNCnZ0IDAuNjMgMC44MQ0KdnQgMC43MiAwLjg1DQp2dCAwLjcyIDAuODENCnZ0IDAuNzIgMC43OA0KdnQgMC43MiAwLjc1DQp2dCAwLjcyIDAuNzENCnZ0IDAuNzIgMC43NQ0KdnQgMC43MiAwLjc4DQp2dCAwLjcyIDAuODENCnZ0IDAuODEgMC44NQ0KdnQgMC44MSAwLjgxDQp2dCAwLjgxIDAuNzgNCnZ0IDAuODEgMC43NQ0KdnQgMC44MSAwLjcxDQp2dCAwLjgxIDAuNzUNCnZ0IDAuODEgMC43OA0KdnQgMC44MSAwLjgxDQp2dCAwLjkgMC44NQ0KdnQgMC45IDAuODENCnZ0IDAuOSAwLjc4DQp2dCAwLjkgMC43NQ0KdnQgMC45IDAuNzENCnZ0IDAuOSAwLjc1DQp2dCAwLjkgMC43OA0KdnQgMC45IDAuODENCnZ0IDEgMC44NQ0KdnQgMSAwLjg1DQp2dCAxIDAuODENCnZ0IDEgMC44MQ0KdnQgMSAwLjc4DQp2dCAxIDAuNzgNCnZ0IDEgMC43NQ0KdnQgMSAwLjc1DQp2dCAxIDAuNzENCnZ0IDEgMC43MQ0KdnQgMSAwLjc1DQp2dCAxIDAuNzUNCnZ0IDEgMC43OA0KdnQgMSAwLjc4DQp2dCAxIDAuODENCnZ0IDEgMC44MQ0KdnQgMCAwLjc4DQp2dCAxIDAuNzgNCg0KZyBhcmNoIA0KdXNlbXRsIFRleHR1cmVfMQ0KIyBOdW1iZXIgb2YgUG9seWdvbnM6IDQ0DQpmIDEvMS8xIDIvMi8yIDMvMy8zIDQvNS81IA0KZiA1LzcvNyA2LzgvOCAyLzIvMiAxLzEvMSANCmYgMi8yLzIgNy85LzkgOC8xMC8xMCAzLzMvMyANCmYgNi84LzggMTUvMjMvMjMgNy85LzkgMi8yLzIgDQpmIDcvOS85IDE2LzI0LzI0IDkvMTIvMTIgOC8xMC8xMCANCmYgMTUvMjMvMjMgMTcvMjUvMjUgMTYvMjQvMjQgNy85LzkgDQpmIDE2LzI0LzI0IDE4LzI2LzI2IDEwLzE0LzE0IDkvMTIvMTIgDQpmIDE3LzI1LzI1IDE5LzI3LzI3IDE4LzI2LzI2IDE2LzI0LzI0IA0KZiAyNS8zMy8zMyAyNi8zNC8zNCA2LzgvOCA1LzcvNyANCmYgMjYvMzQvMzQgMjcvMzUvMzUgMTUvMjMvMjMgNi84LzggDQpmIDI3LzM1LzM1IDI4LzM2LzM2IDE3LzI1LzI1IDE1LzIzLzIzIA0KZiAyOC8zNi8zNiAyOS8zNy8zNyAxOS8yNy8yNyAxNy8yNS8yNSANCmYgMzMvNDEvNDEgMzQvNDIvNDIgMjYvMzQvMzQgMjUvMzMvMzMgDQpmIDM0LzQyLzQyIDM1LzQzLzQzIDI3LzM1LzM1IDI2LzM0LzM0IA0KZiAzNS80My80MyAzNi80NC80NCAyOC8zNi8zNiAyNy8zNS8zNSANCmYgMzYvNDQvNDQgMzcvNDUvNDUgMjkvMzcvMzcgMjgvMzYvMzYgDQpmIDQxLzQ5LzQ5IDQyLzUwLzUwIDM0LzQyLzQyIDMzLzQxLzQxIA0KZiA0Mi81MC81MCA0My81MS81MSAzNS80My80MyAzNC80Mi80MiANCmYgNDMvNTEvNTEgNDQvNTIvNTIgMzYvNDQvNDQgMzUvNDMvNDMgDQpmIDQ0LzUyLzUyIDQ1LzUzLzUzIDM3LzQ1LzQ1IDM2LzQ0LzQ0IA0KZiA0OS81Ny81NyA1MC81OC81OCA0Mi81MC81MCA0MS80OS80OSANCmYgNTAvNTgvNTggNTEvNTkvNTkgNDMvNTEvNTEgNDIvNTAvNTAgDQpmIDUxLzU5LzU5IDUyLzYwLzYwIDQ0LzUyLzUyIDQzLzUxLzUxIA0KZiA1Mi82MC82MCA1My82MS82MSA0NS81My81MyA0NC81Mi81MiANCmYgNTcvNjUvNjUgNTgvNjYvNjYgNTAvNTgvNTggNDkvNTcvNTcgDQpmIDU4LzY2LzY2IDU5LzY3LzY3IDUxLzU5LzU5IDUwLzU4LzU4IA0KZiA1OS82Ny82NyA2MC82OC82OCA1Mi82MC82MCA1MS81OS81OSANCmYgNjAvNjgvNjggNjEvNjkvNjkgNTMvNjEvNjEgNTIvNjAvNjAgDQpmIDY1LzczLzczIDY2Lzc0Lzc0IDU4LzY2LzY2IDU3LzY1LzY1IA0KZiA2Ni83NC83NCA2Ny83NS83NSA1OS82Ny82NyA1OC82Ni82NiANCmYgNjcvNzUvNzUgNjgvNzYvNzYgNjAvNjgvNjggNTkvNjcvNjcgDQpmIDY4Lzc2Lzc2IDY5Lzc3Lzc3IDYxLzY5LzY5IDYwLzY4LzY4IA0KZiA3My84MS84MSA3NC84Mi84MiA2Ni83NC83NCA2NS83My83MyANCmYgNzQvODIvODIgNzUvODMvODMgNjcvNzUvNzUgNjYvNzQvNzQgDQpmIDc1LzgzLzgzIDc2Lzg0Lzg0IDY4Lzc2Lzc2IDY3Lzc1Lzc1IA0KZiA3Ni84NC84NCA3Ny84NS84NSA2OS83Ny83NyA2OC83Ni83NiANCmYgODEvODkvODkgODIvOTAvOTAgNzQvODIvODIgNzMvODEvODEgDQpmIDgyLzkwLzkwIDgzLzkxLzkxIDc1LzgzLzgzIDc0LzgyLzgyIA0KZiA4My85MS85MSA4NC85Mi85MiA3Ni84NC84NCA3NS84My84MyANCmYgODQvOTIvOTIgODUvOTMvOTMgNzcvODUvODUgNzYvODQvODQgDQpmIDg5Lzk3Lzk3IDkwLzk5Lzk5IDgyLzkwLzkwIDgxLzg5Lzg5IA0KZiA5MC85OS85OSA5MS8xMDEvMTAxIDgzLzkxLzkxIDgyLzkwLzkwIA0KZiA5MS8xMDEvMTAxIDkyLzEwMy8xMDMgODQvOTIvOTIgODMvOTEvOTEgDQpmIDkyLzEwMy8xMDMgOTMvMTA1LzEwNSA4NS85My85MyA4NC85Mi85MiANCnVzZW10bCBUZXh0dXJlXzINCiMgTnVtYmVyIG9mIFBvbHlnb25zOiA0NA0KZiAxNC8yMi8yMiAxLzEvMSA0LzUvNSAxMy8yMC8yMCANCmYgMTgvMjYvMjYgMjAvMjgvMjggMTEvMTYvMTYgMTAvMTQvMTQgDQpmIDE5LzI3LzI3IDIxLzI5LzI5IDIwLzI4LzI4IDE4LzI2LzI2IA0KZiAyMC8yOC8yOCAyMi8zMC8zMCAxMi8xOC8xOCAxMS8xNi8xNiANCmYgMjEvMjkvMjkgMjMvMzEvMzEgMjIvMzAvMzAgMjAvMjgvMjggDQpmIDIyLzMwLzMwIDE0LzIyLzIyIDEzLzIwLzIwIDEyLzE4LzE4IA0KZiAyMy8zMS8zMSAyNC8zMi8zMiAxNC8yMi8yMiAyMi8zMC8zMCANCmYgMjQvMzIvMzIgNS83LzcgMS8xLzEgMTQvMjIvMjIgDQpmIDI5LzM3LzM3IDMwLzM4LzM4IDIxLzI5LzI5IDE5LzI3LzI3IA0KZiAzMC8zOC8zOCAzMS8zOS8zOSAyMy8zMS8zMSAyMS8yOS8yOSANCmYgMzEvMzkvMzkgMzIvNDAvNDAgMjQvMzIvMzIgMjMvMzEvMzEgDQpmIDMyLzQwLzQwIDI1LzMzLzMzIDUvNy83IDI0LzMyLzMyIA0KZiAzNy80NS80NSAzOC80Ni80NiAzMC8zOC8zOCAyOS8zNy8zNyANCmYgMzgvNDYvNDYgMzkvNDcvNDcgMzEvMzkvMzkgMzAvMzgvMzggDQpmIDM5LzQ3LzQ3IDQwLzQ4LzQ4IDMyLzQwLzQwIDMxLzM5LzM5IA0KZiA0MC80OC80OCAzMy80MS80MSAyNS8zMy8zMyAzMi80MC80MCANCmYgNDUvNTMvNTMgNDYvNTQvNTQgMzgvNDYvNDYgMzcvNDUvNDUgDQpmIDQ2LzU0LzU0IDQ3LzU1LzU1IDM5LzQ3LzQ3IDM4LzQ2LzQ2IA0KZiA0Ny81NS81NSA0OC81Ni81NiA0MC80OC80OCAzOS80Ny80NyANCmYgNDgvNTYvNTYgNDEvNDkvNDkgMzMvNDEvNDEgNDAvNDgvNDggDQpmIDUzLzYxLzYxIDU0LzYyLzYyIDQ2LzU0LzU0IDQ1LzUzLzUzIA0KZiA1NC82Mi82MiA1NS82My82MyA0Ny81NS81NSA0Ni81NC81NCANCmYgNTUvNjMvNjMgNTYvNjQvNjQgNDgvNTYvNTYgNDcvNTUvNTUgDQpmIDU2LzY0LzY0IDQ5LzU3LzU3IDQxLzQ5LzQ5IDQ4LzU2LzU2IA0KZiA2MS82OS82OSA2Mi83MC83MCA1NC82Mi82MiA1My82MS82MSANCmYgNjIvNzAvNzAgNjMvNzEvNzEgNTUvNjMvNjMgNTQvNjIvNjIgDQpmIDYzLzcxLzcxIDY0LzcyLzcyIDU2LzY0LzY0IDU1LzYzLzYzIA0KZiA2NC83Mi83MiA1Ny82NS82NSA0OS81Ny81NyA1Ni82NC82NCANCmYgNjkvNzcvNzcgNzAvNzgvNzggNjIvNzAvNzAgNjEvNjkvNjkgDQpmIDcwLzc4Lzc4IDcxLzc5Lzc5IDYzLzcxLzcxIDYyLzcwLzcwIA0KZiA3MS83OS83OSA3Mi84MC84MCA2NC83Mi83MiA2My83MS83MSANCmYgNzIvODAvODAgNjUvNzMvNzMgNTcvNjUvNjUgNjQvNzIvNzIgDQpmIDc3Lzg1Lzg1IDc4Lzg2Lzg2IDcwLzc4Lzc4IDY5Lzc3Lzc3IA0KZiA3OC84Ni84NiA3OS84Ny84NyA3MS83OS83OSA3MC83OC83OCANCmYgNzkvODcvODcgODAvODgvODggNzIvODAvODAgNzEvNzkvNzkgDQpmIDgwLzg4Lzg4IDczLzgxLzgxIDY1LzczLzczIDcyLzgwLzgwIA0KZiA4NS85My85MyA4Ni85NC85NCA3OC84Ni84NiA3Ny84NS84NSANCmYgODYvOTQvOTQgODcvOTUvOTUgNzkvODcvODcgNzgvODYvODYgDQpmIDg3Lzk1Lzk1IDg4Lzk2Lzk2IDgwLzg4Lzg4IDc5Lzg3Lzg3IA0KZiA4OC85Ni85NiA4MS84OS84OSA3My84MS84MSA4MC84OC84OCANCmYgOTMvMTA1LzEwNSA5NC8xMDcvMTA3IDg2Lzk0Lzk0IDg1LzkzLzkzIA0KZiA5NC8xMDcvMTA3IDk1LzEwOS8xMDkgODcvOTUvOTUgODYvOTQvOTQgDQpmIDk1LzEwOS8xMDkgOTYvMTExLzExMSA4OC85Ni85NiA4Ny85NS85NSANCmYgOTYvMTExLzExMSA4OS85Ny85NyA4MS84OS84OSA4OC85Ni85NiANCnVzZW10bCBUZXh0dXJlXzANCiMgTnVtYmVyIG9mIFBvbHlnb25zOiAxNg0KZiA5Ny8xMTMvMTEzIDgvMTEvMTEgOS8xMy8xMyANCmYgOTcvMTEzLzExMyA5LzEzLzEzIDEwLzE1LzE1IA0KZiA5Ny8xMTMvMTEzIDEwLzE1LzE1IDExLzE3LzE3IA0KZiA5Ny8xMTMvMTEzIDExLzE3LzE3IDEyLzE5LzE5IA0KZiA5Ny8xMTMvMTEzIDEyLzE5LzE5IDEzLzIxLzIxIA0KZiA5Ny8xMTMvMTEzIDEzLzIxLzIxIDQvNi82IA0KZiA5Ny8xMTMvMTEzIDQvNi82IDMvNC80IA0KZiA5Ny8xMTMvMTEzIDMvNC80IDgvMTEvMTEgDQpmIDk4LzExNC8xMTQgOTYvMTEyLzExMiA5NS8xMTAvMTEwIA0KZiA5OC8xMTQvMTE0IDk1LzExMC8xMTAgOTQvMTA4LzEwOCANCmYgOTgvMTE0LzExNCA5NC8xMDgvMTA4IDkzLzEwNi8xMDYgDQpmIDk4LzExNC8xMTQgOTMvMTA2LzEwNiA5Mi8xMDQvMTA0IA0KZiA5OC8xMTQvMTE0IDkyLzEwNC8xMDQgOTEvMTAyLzEwMiANCmYgOTgvMTE0LzExNCA5MS8xMDIvMTAyIDkwLzEwMC8xMDAgDQpmIDk4LzExNC8xMTQgOTAvMTAwLzEwMCA4OS85OC85OCANCmYgOTgvMTE0LzExNCA4OS85OC85OCA5Ni8xMTIvMTEyIA0KIyBOdW1iZXIgb2YgdmVydGljZXM6IDQNCnYgLTE0LjQxNTc0NSA0Ny45ODE2MzIgLTU1LjYwNDg3Nw0KdiAtMTQuNDE1Njk3IDQ3Ljk4MTY4OSA2Mi4zODI0OTYNCnYgLTE0LjQxNTc0NSAxNC4yMDk5MDIgLTU1LjYwNDg0Nw0KdiAtMTQuNDE1Njk3IDE0LjIwOTk1NyA2Mi4zODI1MjYNCg0KIyBOdW1iZXIgb2Ygbm9ybWFsczogNA0Kdm4gMSAwIDANCnZuIDEgMCAwDQp2biAxIDAgMA0Kdm4gMSAwIDANCg0KIyBOdW1iZXIgb2YgdGV4dHVyZSB2ZXJ0aWNlczogNA0KdnQgMCAwLjY1MTY2NA0KdnQgMSAwLjY1MTY2NA0KdnQgMCAwLjMzOTA4Nw0KdnQgMSAwLjMzOTA4Nw0KDQpnIHRleHQgDQp1c2VtdGwgVGV4dHVyZV8wXzENCiMgTnVtYmVyIG9mIFBvbHlnb25zOiAxDQpmIDk5LzExNS8xMTUgMTAwLzExNi8xMTYgMTAyLzExOC8xMTggMTAxLzExNy8xMTcg"
}