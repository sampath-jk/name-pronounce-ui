// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.post('/authenticate', (req, res, ctx) => {
    // Persist user's authentication in the session
    //sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({data:{employeeId: "Raj123", token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkdXJnYSIsImV4cCI6MTY1MjYyNjEzMiwiaWF0IjoxNjUyNjA4MTMyfQ.0eSFzbhlRMk2fbqtW_0lYUGr7_i5Lx59mOZ0pVCVVXDTNec_16XQ9BYbi5StmS2IivumgjQ74z13qw-4jd8QDQ"}})
    )
  }),

  rest.get('/user/getEmployee/*', (req, res, ctx) => {
    // Persist user's authentication in the session
    //sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        "message": "Success",
        "statusCode": "200",
        "data": {
            "employeeId": "Raj123",
            "firstName": "Rajasekhar",
            "lastName": "Uppalapati",
            "preferredName": "Raj",
            "address": "WELLS FARGO OFFICE",
            "city": "Hyderabad",
            "country": "India",
            "telephone": "9999999999",
            "email": "test@test.com",
        "roles" :["user","admin"]
        }
    }),
    )
  }),
  rest.post('/pronounceName', (req, res, ctx) => {
    // Persist user's authentication in the session
    //sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({data:{
        "employeeId":"Raj123",
        "audio": "data:audio/wav;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwH/////////FUmpZpkq17GDD0JATYCGQ2hyb21lV0GGQ2hyb21lFlSua7+uvdeBAXPFh8EwDlW0ehGDgQKGhkFfT1BVU2Oik09wdXNIZWFkAQEAAIC7AAAAAADhjbWERzuAAJ+BAWJkgSAfQ7Z1Af/////////ngQCjQeGBAACA+4Pgnn/8fd0Rf90zY5A4I5sNHoe186NfS5+ANlEiHvmVO3X+5f/xAkPRacx3OfDUuxgtxccoBbyNBTZK3NsGLRW5fUKy14cjlhRHvwkoEnxRlOS+aM5Rz8lKTX7MHyg3U0HG83HFpkRPcwJeoCfnPCRCiBYU8oiPS0VMegAAAAAAAAAAAAAAAAEoDdjJfSbIEjMaoUtugoOt5QbbeZsoTQUKnRlNzqxnUk0CBo+PXOBbyvXFu/HQuGXx8McjG4PhmoyVCz3p0ARril5QqgppxTC+Gk8y8Y0IYEGwfwIAr7C1awAAd7QPDA4cT/413CFKkolovFHXfuc7of7xXdqjsqtLNtIl2pITk4GpbU5yznNfiSSJApsz9BgBKvQbY/iokWE4/BAK+urMsJI+1GrQsVnjKA4MbnWsdJYBpFHO9Ji54lcRyoJEqXEDZ+ELu0qwqxTHrXcaPsKh665whcJssIJX6EUoiBYw91DayF63O4B3DCBG+MqN2gipKkfEv5jMdq3FXWlrm1MIPZC/T/8s5okRhiZvkOKNvt1Q/YGLurLuyislomjbWd4cGx7bvmhWFII9vdn0TlbPp+G12KJ5VCltF2ADPQlqQk2uOnL6ikHWq0ZIJrz73PIWbOWdo0EsgQA8gPuDXGEZgKrCUvalYuo+l5tUkt4Bv/vpB9K09dyDVsdYOBZE7hze0i9XuuqpI7YBmJ4MdqKpgzt1/DA3GlCPX4KSvchBznJzpZZvMFf/tuaFuqIcs8D4ZdS90yMtnAK9XRsxjcQUJyh6EWaS+IO6ZvJuHaDTn9Nh/fcLiJJKJQZsKA4fYsQfUolkDLog16cbsqjXm3No1Tmtq/lXStoly3kyYkJgffhjFjDsjMg/D0FpzxIUU8x5WKNlzPTmhJV3KoJD+y8Cl8v6kolNm52HoYyp72yFgucx/OmjDq52wAxF2/VdVxez/LB+ybkdcXNO8DwrTPI4jetw7HgFc6lak2G0cf6kYBiORg1rJnN1bwgJvxN7gs28+rV0SLS5Dl/FOkdzMfyDT8f4o0GDgQB4gPsDEZECtlRWClExgT4GIJUEmnPpsfh53ljq05TF8TE82LvAK1uyE6GEtFl1GUEEU6x8tJLugyPSTh2iZGJ/ehzJ4Tjko6oQakbaeUePAjXSGu/vLKYuiNrs+pSanhwOVROIU6iSS8DdXAROaft1sQ1qImREEgTGiliUkJKGyh3nyBsLjf5abyEN5O07iY85DiqvevpC/jgalyd9AUVeZov9xnHAC70k8kx5ZQHcCIN9vuLpmnh34SedjtxEUm86m54d/5hUNh4LoA/rXrPzD1K2NtCzpyiwZZgHJ6k51KvQqNcGXZmI818ChoWAR+hxnQYXEcTWrKAPNdF8JCxDX5aG3zLxRGE4SbuqA3VCWJiB7hNrrv5MQhqxXy6KUywsQl+LrVyyr4U27gIlF0bYx38hXuN1aWDSYbZtPKGFUln2ibz/9HMZfgDl+NEnjw+H8S7LQWI7rVRvibSX6KfFsirma+QmKJEeXM0MdSGcdkG/+WI2hhJHZujjuZRygIwwo0GDgQC0gPsDr6/4oh1yUWb6Knz1eylnjAcpQrPwdy8GTX7Y0G969kkSqNwU2HI+F5pZ99KrmngNQhtUdUFcukT4LO1uaDSzUsu9SJx4I1Q8yh+XHwwgTY8iSyaQt1ZMYnpWhYbzCcbdNunrlFDx3GMGzB2JqRNcOqv+s5sKd+x9zVFXcCZY0lHioFJy+xMrGwjxLs0uHOP4QvxL9S/IPRNuqoUA1lio2F7Nr7rm3xUy8n4z7HaYudMksnsHNlj8XL57s5oBY1C8nGbIvCE13rokSCwfk9/Q5+VL5Q2OHzeclr2YnjE3SNkymXHIkW6r4+uPMPd3gUb8V+DZUYcfUpY3oONWS38YTe9/xhKmcEj6GBgPiOZHXdp5+e9awfFUz3NgetknB7uWUob/AcLnK03m0u4+sdbGQkcLXHrdtSNuGhlz3c2PXsEghtXsx/o0iad3Yk3yHZB/zcWlKAWZcMDGNMkXOLa6M2HUUoU4jeCWgZDCME60/70rXkVCXNUnO2o93/1Eo0GDgQDwgPsDIy0idpjn+P1e9rXWtOdAVDAj88/UQmFTugnSvWNB9MPZ+z8sGfli1mrNljaZ1grTL2sMsuFaO8+l2ufaeBAUGPc5LxJSTkuusOcDihnDcm+IIKRZBk1wCrt/Y4TABidwDW2oCyBLyX/dsnrfzDexPNYPm2Gh4QYZ3xrEF8e5NBlGuxA+WmhCECMTHw5Dp+HIo9fv8v0R2t0AwmKrYDYubx3bx+t8J62aKeXLMnU4UZrehFDLiCOIVYF4433cE9fytpyRk+LoAt+K8+c8XAWSu8Lkoy3Au4y/yzT9iAIJ1aGeJish+pxrWLGtZq2nfkrvmEy5RPqOgH+TW17f+Zcwmon0XRMpsTM8L+ocahUq4/68blrfo0PO0WPx58uFIgStjI5fAOQKGOmbcEaP5B4DJFsqYo3D/uuBB3CJCdGpk/iq60BcXyw12HVrNl76zyZcNsQXDZHQCWRLmGaU7PcDXXnoAAu0m64EOZ7eoagVqO298ZxjsBmDIgcgH4dko0GDgQEsgPsDgHTkK+ueK59ovCIA+4yMq9sntcUhK9Ti5AIStT1i8/82el/bCTiCYD8/nHm/o2yb0Va80JYBUMO1ofdm/wZIl1Nque5oAQWULrtjzCniYY/Z0bMFcFdwZpZvbMa5k3YqczPVRJU49dB8+dvphBrG0JWNCqlFnt4kuARGlfXYsNYB/HqjXmlVMqkcYckIRZyQn6vTAz1gdVk2qZfSiR3A6wCI+T1wzJcmtVZmivCGI1hmyGyvUU0QWyV0uCsGxrMboPkSo9OaP8GEZVKFqJVhPXrk/pbXmCNSkxnkZdUsW66aLEZoLxvBJLRRk4ej9cLPYfa7nuytsXc6Dd1Eu8EHhGr49wkUDkYGegaSwi2RLTJAaYOeaR0fd1dEuN8W5SjcX5XVPE5zRPHQkNjRl7Bv9hal/lwAFsZ9QmmNHdKhlk82kt0ZcAoFQvkII/+PjbTwU8k59NEDQh+v2macwIw+2iqy8iWZUQMvc7AA5KNTaqWcpZhaCIDDqhki5o4Mo0GDgQFngPsDDg60KAnzKd1rRCjY6pkRLwl9LPo+M6vhUMkvoCeurGEtbyUDqAwgOQYk9VrL2j1jytcRwvnYlfCubpP8W2eunv09bPw1gbtbvISAxFJlnUujSzJRYdro5PCTGhpLpvgQs5YLr+uKOEf2C4gCtZiuIxnXwQT5ExB7PFLDckiOOhluHgXVZngs6JFGf2JT/gk8doAWggfOZLxHKgB41GzRIop3AW9Jz3PKqM7EiTgvgDhc8ZhVNxZwPy5G1TlmwbrBQGdZpwJs7nvAp73M6S96y3aGmUZ7vMC6xMvPzNUCqjsQIS3BC9wA5BLyByU0WGqjUcLwMOqXYS6fBWl/i/eBK8HIT0JMIXcbeS7MdIKFoHr8GOq7ETL1qKrX1/c42eNk+6SBl2jhkei04PW+w+k8ds//jAVq8cSnqEP1GgxwsoEJ9iwlv7JDrB51ZVjNes6iEGc4Rg5l+VjAdog+0gD6AXBmLFHjkWXvF0Qdy83/m18/eAt/bJYt/Rm1Mo1Qo0GDgQGkgPsDgjlHHAwsjee8afNlGlmhdoN2KAyVQpn+n+AKRTmsJtX8xDT2NJI2sm+wEaWwd6q+wWHnqcgFlbu5FKasMFZoSEgGb2h11NDk66CTJUZlSkcIi6h1epUyUuoDIdHw6ndlrxiUlOjfSWPtDb68gvi6TjIwO/sffidhGtbE29RywBp6hDgJPD75FyBDv2himj+QtysyReSys6zwbB0TYSjFpfLECRoNy8FRVbZwmJd2oQWNNCAg94iOut11h9dlh/+4FkGIDlzD06IxR12NfhVAc5EjSUSRfYbtNwtJMdvkthEYfGCHbrJW7mgW38SrJPiAb94mZh8zS1unI64BL48ZcumoGA4QRebK2BtVJ4UyVVB2cDsSr+YuyElYj0W5M8WDsttHimYZlqsH003ASf4o18ntaVM3ZKiIbjVPnezw1ZKHBeoEst+6PE+6Ma8hc2snHf3zYomxNHpAo7PBhz9TBbiWdWQ8krOOQlse2Kkj6U+ekkIgDrTE5yE+Kf7fo0GDgQHggPsDT+chfY8meVcV5XJlIGG5ZtKaB85Cd+e2PSxWWS30B++GQBa1E3EO2A6tjl5bWiSxlpBO7MIMNRgWBrRCR2f8Yf8VD+14vR/r0TKayfeIxg2THP8g/KMmpVh0I06NocHrDnIURvUyZDKrEBqkXWfLasYf87tY/elvHWRAkdTl30ROm9chbp5vzDj0QLHZDtvjrmGs6xVL7pHIfp/xovjU3Sw+kS8Tz1Bzn/06rK1rasVFdMKE9S0g1hiDFL2affK5FSSPgtNrs3ggmGokMRxiUI9C2I8g9wbGBS7HSTFEaUY7uf5CdnBVsSunm4oBNR8BzIEx6Sms61pTN1bqmXdSkgqZkgZsxJDrMJC/MetymAci+RZq/HWhTCKrYUZYju4pz6FSs0NDZRYARiJEer33Y2xqCi0KE5/prFu7bjiSkDMyLSVJ1AthwxCHJmzATDkBEj8yktf/iT2E1GA2NU+aKQVaOEndyRhuozmPuUkrmbYwrJL03B0sWhZ3YfSNo0GDgQIcgPsDGYZosfqz/wmpozSInUowZ4Nt854SudjbG+PBIWTbR3D3AAc5ossMji85HlzElo2m15r7Ch79fuiFSZ1sBhy42eU/UqMFUjLUv4SMBDl+Rldsruc/GoocyzpNy2PuR9tMFEmHS5iwbqW2Wz+jySdjBzAsVMuo0pUHTM68yaIc2Q4KhhaO6Rx93pNvjXR0MnMU+wxOyTt6qb+ru48G4BR4ssq9HnQwauNAZ/6aSaDQVAoAekP//DTH9jTkp3BfC5iUgMhL13EJn7lRja+bQGskTe3PTBBwuQKFzIxzzS+gUos38rEtNPeTai0TsCwT0NHWOdOtUxnHFR9OWL6SjIpTNgqwc++3sIIHomhCchwdtBXGvuCQoBpfI5PZdYBjvhFLt4q8k1SfW+6D2S9IHgvTUGpIYjikqXTPyI/2ep65qSGJt2OPfxJTE4pRKKqwX71FZNMl5mITholX9MVxIRVfzsradax/OdL/IhaYvRhvrHd/+eLQnd8qcDqePCkFo0HSgQJYgPuDf9xA/CQBm/oKdU8CMaC+7tG2Xpv2lAisfNqitAssSkh2EKgXvOd8Ap/cdnOKfIAh8ypbzLgX5WQzYm9zWYrdLAYm68eRmz05dvu/MF2mcYoi7IMNw62A4AmiHV77ztJZLzG2jf18xitjHiHWgzBFfSS4T0yLjK5DMn9aj0hFIKZocGPpTTBk4/o2C3s8KRDIID7mx9vqBVdrl6opEOtmlEXhtNZvJ+WjzXMe9mwzl6U81SxwNjt+TL9lbRoxgAR+qQk8orAyT6FIRc/55z6jBI9KaK9SXDJyon1pViZC3elorCMKqG6rDXEw+dDtd4r8SIVK1IwH7iGItxoIYrKoQstL3fLU83X4yRVfK9LxqI4vLKCqXrA/6X+auMRnIKkspTu4ATE4Ub9yhSMeFhNrmcuPfzvsLuMPpDz4A6n+xkQ0M6dm6gPzNZL/tvrrkomVlNlxzjce3SnzgLl9jiMs7ogdt3kMtnRgNO+Fn7vHO9JnBsP68FKCn8TjYdeLL5qxLIzbKHQmZJeq/pc4YmGC1EIszegmNbwYyL0hymWZVWsy+nxmfkaQ7DKTtWVtLu8Cx7/oeDabFCzHaddpJC97flav/3swxnWX85B0K6NBpYEClID7g3aT1dXSUouP/2POvjoLZufeibOJsN3+hpMOZ4UGLvG5jefVHKfrgx0k7g3OKrT8kUr3MuxBv3qpLJGvQU+3j3XCVWpGAlduHtOxPen8994sbND31zvPCR9sqVld7lwO3M5XkSDDAfcsGK3yND36AeM9yZYatWtTS9XQwmhLOR9BGknCf7iPxmY0ivNDmm8d8E14ynULjzq2d02Q3EUquc5ZxpgOMx2n7qnDVOpFLAq+72Zhyz6EemeeIxzJg7QoqmtK5WaE+a4Z+yDjAhi4ukXcu8sJOhVVX6cIG46/dbtuofijC0LDGLeQlS59MjFckRf0Vp/xdRTgQ+0oeokif7sg5GDz7gDFjUCrMNsSNfN/T3dgmKNvny5TGAmVQn+VHun9M+q19WomSAal6RimkdvDpNnG8WuqLtPS1F5aFs+8SOLDZsGNT+JzkY9svtJoarZcj7DNJaZN8WO0rNKHoZUjzk7CXMxU6ZY+NGBfQI6p0qFvVdISbuEqPtkeYEEaxDgCt11FgX1nm9oon8k0s4XYzjS1XhWc4VQSVcQENS+jQZuBAs+A+4OUgN9QqUw4ptGRl0eB/ExmWryonpn98xrZMTnSlNyJkXafnjaazm+xl6rzgrNbA80GVJslucpLeYtRShNE1CRHtB4yWKTj5m+sFRX0GVTkssCYD2InX6lzQDjQZgavOmnVSAfX/O7rtMMRNSikfZytSC6rHw/kbFnWN0eJhPf+M46SJNuGSeIXxUg7efEbX52PEnFAWy7ajMY5UvwhvecxnjNuQPkCrLFD17iQ1/Uv2BYLL/EvstrA8EptueRiVl2ExUE89GPfHIKv5BJkltjZ9qZw5eWuL/ylz6ajqo/8+TpLGLDtmW5fTkMCvUC3XmvoQSdG/fPyXo4AajytJqZfNtLs6ZEoUeFjN/9BLmA9fdxYDxn7StW/9HhvrRknbo1Uv2fGOK8ezD6AUGtAXcsuKcQLPH54WpUubaG+SqwiSw6740G2FjBb+56fRcJxtkDqcLiJFKb41imwGsX3Gp9kIxi3+pgp+0CoerEfHdslD6+AzBmXmRRuNMPDJhmzGPh8pHEfTxj3Szy9uyHXFcKlMJ1Gy0WjQYeBAwyA+4OAf9XQSe0zDusD1+iJgC53W4jYwVIBNllltu/27kYxnozluFgU4JDqRgCquozFqxI+12p2FqmbqVgJL4m6g4L4UsnpK8LxH8JzAcrAnQ8JEsHnUb2aVUagsxUF9G7yHLh7Ygze9ZKWNHHUZfMLXK1UIxyZB0G94wr/VqE3wyzFxOM91jTJsOAjgMEQqvNT/TxAecyjf8sdxaoQBJGh1riVQte4K5DEIIkU8kMuNJH2fFyIUX3lSLmd9Ypgc7uL6q5RuLbfuQShb3IOxMPP0if0RQjMInmhxCHwWJADdmahf5Z/HaoY94ADoQqVEMoIuZykPQSwcLV7o2NmWr6lrH4aO05GjbE+7sPkNFNzISusR5z+TBEduRghgrmWrYIGdkDNs3pWoqfxLOeVnHfzmejWDXuGkOMv5tEZM6wzDpCja45IbrQinLcZVKdmTGXAadG5UCeGUIgsQWlM0D6S8rM7fHbvmBmxI2fnbQpBjYGtr7cyVLYcmr5rRbzUJzh/BBDIo0GGgQNIgPuDf3yVhuYxwE37+CvgSmvLwa/RqB7kPQrS499+o9jcMnml2kzSDLdkdzGvnqIVqahEUwlcNqSsyUEueyyDkQNFOYkIoXouGrBtNYsHDxggbf7v/sb20px8IAM33PXKveoebq4x0IP6/x/09dOJDlgmRmd50UQJGSVGEfm4Wg0Y9Dt5FCqlcbh6TOoYewD3mAhaWG2s6Oy1ECFfM5Bpu5uAC1wFkIXlRhvVwnLXkJY/baGzPQ/xnD0P4gkphC6/Lfji0PJKKDekAjaGaPuTJw59FI9Tf8AUL++9U/nZGocSBtCpWlvniyLPDHW1LngdD4ifmkoMSb8B8NYiuneh8AJTRQfNZG7Ks5GJBdU++Qzwy+3GUS63VRNiOEgC02xn8Nlh87zIgkjJID71192Dvd/Wd2EgmDNfaCJjQ/M4US7J/2djHsiFDhBn7hXQSlYHgjWz/6YALNQhepfFDhSDS+FW9uHlFLHUn4fu+DU299ogKnivVmo3np+LTxJZNUoDQq43o0GHgQOEgPuDgH918Yx9eN4Bh23gZFQaVBIZ0iX1DWaFLzb1VAnbjY0Ds5quC7DMx65zN7TbD3lp8erQRZyoNxNrVtC4uTrScG/OM5+35y565Qh5LnWDl9ksrfL7EDFVq+2FrYi68WoN6bVvzpN8ncGhJ7uaKDmixUCeKd/0RR0rXJFHao4nPP6amiJ+KKy6oP5XtNAEdzBk+HBcWHrE7KfJmCQjcxjntjPXwzCkLFQpWOazyLrIAkZeQsNpLIn5PNA8tLPQwyp2j6+afQH5Ok7euX9D3cs6Ty5M+KRvNM85mtGKrE8TYHspIPjDsW9EyCLmGl59USaYmCWJ1nrxQxfBBO0ksvORZxQlEE5pqlRzCZj29Mz4Bv3Cx/Pm2JA8oBx/ZQ1eMby4nx7DNzI9SAd3CwsvFm0AY6j6VZF+DTLwr/zxhAQpMurKvIok1FyQ1Przi/XtjwH7FTkcy7YazBxa99MVU8fZatX8KSOGb33at5/WxBrI7XbD3n7O11UKbS7mDuC9LH1EKqNBe4EDwID7g3+AF3qsh+B+ezerj0E96hGtv6f7Xl423z4G+QPCyeab9hQqS1HXmpUgTp5o4rTZzURTw93frJqvb3gkdJujmSqCknOU85URbNbE5GrZWRwxBk2W5u5BUCIETzy+w9fMFrYl3nRtNS7ZPcg/tJ8aPV0SVBTKlHZ0FBAJSYRXq7Q1qQlwN+ggVci9M9wDfKQBaOdz0vUzHFPMmOXXlyUlWvsOT3oqKDhzRqZLfnJVCPA/3bhgav0HfWIT8Dx2boP9ubnB161/fv6vNPCb6oiZM5FnFVaxErFOF9UQW+Qs/XwlM/eRRnnzvxxLe+Inb/r08YVfIS3t0hb597JVYjbyam/qUTuxwYxFNDLPIA9Dcgn0bapg7OyiuInPVxIH3BpHGDMPuTngbCKQCisSG37n8buvH436rP94ibr14wjqXirdY8pNVQHg/MkK+uq8W3UFUjbNfLPtINl3+8gfDmvmBIogmb9XvtdyvcqzdPN/dENWX1ES9VejQYmBA/yA+4N3hA7+RTSCCjjd8EeunUahMIKqYApAhiRcmzC6opzGZ355z5nZEJR7TSpYQNHZix0X+crkiX2wKxAcDg85WjWxP43XU+STEzvzX6h+M4c9e0EiOSuQ28Ybl6FrYQowDxjwNI/2Gj3vt3kalykR/e2NAzHkkPbY76jSJIJkOcEEJe99pJKpziX/I2Cah/UEdjTrq1cbRIf9WAFhtELAi0kiqMdUg6SrW87tJDbrM0D8mYOFEBJmS1M/+TU5qbA4EHyN2msBa4YDYD3Nw3j5CHzwEfD1kFAkgLMqHpqbHFgfuMnUU6h2OJpb+YrN2GU3nJsTZv3UuIYpdowvoxrEIhCUR4RVCEecwC2XTziCQ2Ll9/vAA4watnb7+0JUmqVCAsFzsydfHRpCubWOouQhUlu8PrLGTXVjC05twCxZUhFLX7z+KdYKY6EY6rCR04arTFgmC1VPZYuIRidnt6C7ITlHQRGz72NQRfy2GMsghEs3G8dLV0b+K7qcPu94wYCmHp58cLqjQUiBBDiA+4NyZgFn46qVbjYc090RUHKvE8Kf3TQa8xJdXQqdzCW+N2wdpDRpTEv+nQFWSgK8DKvGIQGgYKfYWSKeToPY7Hu8PQYP/x1xuI94fobd5H/C9nPkQZb+vcmY95n7rCXuZwhQzQjuILJ5C8ytNIXEUPcbeaFdCDwUMFYLhxGDgYOSk0/30Gb3c9OHltIGXzCtUXEx5CJ4SAPz+x3bVtee1o47Z73CPTS8szUh/WVRk2whV07CB22eY2B6qDI8+wLDWy+R3PXjOq+LDo5RmobAOw8tqI1B8VE2mdOnQD0CFtCnr0ysWCKAzCPEeJ3nTDOtuZxge/L60qKcVkmmAEr06G4KIE+7+3bz6klkteDM8rdi/X4JZ5ANrwwJV8JZ83iaQjE9iHzTJtiIS0sc44EVRBAkkEeY/1827/tSyv3w5zkhlKPto0F5gQR0gPuDk2dz8z+HuLQtC3JG6os0+nOuB/+KIDzXuiUkwqCEAVkO7qIBAe98/u2UYG16x1POfj3qgwDq6o9V0/a8hlw/YT20XzOfnLoTgDwgKD7pnJWffaf5ln67YkUBWiE7sh07werz2zHsLLQZUFQYZMD+UYcI8NCbo+esS96HP0LoJhotaEyzL4uzrrlNQiBVXvc5CoGP3gkUueaGX/AAQKg1gk4jMzQ2RworSqQOnuUU1/e0zCzxgZnaHSxcDf/2sJ/21tGeJKFyWsm3z6wcu1/U/LnNNv9PM2RGZ7SOHB5HV107tCrsFQgCmPh2XB4vxKi3DOwGn+xyVW0JzhLFZ/kBPRmAMRwK24jyS4YxbpdKDd8oARpRiWLPnUsdfRECpirZ4au/Oacf5SuELQeeyEIo4oy9j3e2BS/GVSy5lT7h+QCC/ZpP+dQVCRVY3NBwzysEiMs3kmVUSYLkIqYXc+XCcI510Xp5j9C/+egv0WRdqBt+rpmjQVyBBLCA+4N9Z61vPYPKyiSq410yoUW7Z6pKUdaECA/QDrh1IXgoPSYDdNvT+nOqOZ9YAOv447up2+vzVJ6vvL9hEk8jepnXBLPGaN46MX5HJYrrZbXyS/phOGB2cVN38tQFe4CA1c0CtjKdOwUXLr/IT1iNEqwBVkYcIJP2FrDekWg19nCeO27rwBKs6aQfKlmQ0a3+A+LSGNe6hn9mN+oXqkhKM6XnaSU85HiKak/ioOyGIojYsYM0nsLJk4l8QMGJ9JDeX/nBF6mD6/XLFOSl56G28Ifhn/rumIQryhHd2RHznhRN8IRSfpz6qUD5qzIy1tetWPre2vYLTdWFDFCLZ6jjgAvnD7DFwmFSZHNKv/TeFtf9cQa6woO9AvBbN+/VBkjac4TvsFE7CKSgLIxnUPkZboC3JDe44PwVcOyJnQLbnU5V2CodzTr+wvrYYuClkdvf5YLUMSKbyeWjQbSBBOuAe4PCdoDQAMGEBlLl3lAxX/ltfMmTcrmRsMBK3jFxizs8r8IcyPnT43yqPZi3T6jtTxkmZ9iNqvi6j8y4vhEdai+pMiciDsIp/uNItenV6ruMiEZl/AMNaOneJElXA43p1tbu5Wy2K75wFbZCtn0mOy8F1pfJ4qUSbWZxrB6WFrIKEeMfn6IWHIx3i5KyDSmc+hFlCtDJtwFF6KRyzDOLW914fcCVNP5bOzLz2sJY2jLoYSy7dx9iariLNFqFprQ8AxnPVL2OiLXiaYEcoFWMI6J18txmDDRSG+2YRnGy8yb2X3LF8ju76kPLFmiaBcPGMKdZkngUI0g/Votqjmu/sNTH9ebLfw9nbD8ZTzPaDlYml2SENBpZ908om/TZcfoizZqj+y8ytuxg3W9ojcs44CQT/thiV7OfQ16UZYhX1lETD/Pw5SS930cg9ByF0/yc0hkT6phwwkOgI5OB5l2/g1/BEN4/JCQUwqsvdnMTXU/oxDIlkQdn4cZ+zZ/W8bQj/n937r1eZ30sSOXLa3Z0evFYvpU9mKsqRKIacaoT1UH2o8M0jAHt36d3RGxboA01o0FpgQUogHuDd3eAudPSSEGp7nyf95MsmSfp2Ba4jSV73yqhXjtTAiugCc90aBcROjYAdeX8A1NP0o8Ym0uPVZSPIkFezdBClsFl7tNQvn+cacNN37No70H1sm3GZgsF3TRIsjBmB63V9ZM2RAmVmOwr+kAtoIsB7Qaft2kXS7ARtofv1+XqaXbX5UBTLjYKYiVUYR9UIoDIF/le0yrQoCcQCTbE1LXNLAlCLm08jRAsAjr5LYe/mfgEQV5cADLrwFI/4GFFT/ML4rk083dEimqMFHG7zKTqfny7Z2zWKVffo6dtPWrqvW2OWouowsYZOkQjbx8OneQvh+PaUiwwA/7CaRJ16+KZ+WVMTnoWUvH/NLYF18DvRfYiKcTVpXDPgboMzoWv0ScQoTpS5Y1Ar2k/BY087uaiapAkH76t04kq1lwN12XyQF/W+pwId5PAYYWandl9o8K8dxh5uFkhngC4k+MA6scHnoK8tqNBf4EFZIB7g4B2h5V0ihf/cyOwnEgHuTCglWhy+oASWsQqVEFfIH1Uj9fuBSMo7ZEADWMrF+H394ICENIq6S6Px1EDt/+oV+cDk+SNuuHeJkRgwS1tGYt2CSv0LtrIWDOF5fnKVTfqNx1T1HemU7oWVtIX2mzxXXeefb55SOjHbyU8XynXa5/VBDiH8Wck89Th7p6WjviVVbmXUg8waEjcPQaXiDzmLY57I92cWXFx3tJHpV1Z/dGSroz+8u6IdtkKF687z8VHa8cyC/Ss4kJ0mluVpjVVJgILqbU0RJwtN5R2HQuHubxGmEhiTV4kK95O2JM1nURaAfNdcZaLSn+QgLG0sF1w8hmjg/lhq1phMXRG5jmsDAccfPV7e9zb/s8VTPJV97wW4SXut7MiVdQRXbPpDYRaV4R/GnUxXwszwB/X+ticZekctTl9xlEFopr7aPXv15lPE0vwaozR9U9WH0SuhBo9PfCrSKj/MAoHDeY0Z5JqYEr8DabGShDpfIbBo0F1gQWggHuDfHiJ6sKeTNe2Fm1HCgx28Jitx4TxPc9KcLFhXQqPgBHA8ztqFSqDPgvUHVI+DrHMDu0+DUpbcujxj5pSoomRcnBjbfPyVn+hZIMaRahHnTL+nmyKg55roL19iULDxKvwSQzQvWU4Eekywk3zhylmW3uWbLUqoMqHzXC0coNJiTGA52ql/HPBnVS/MXUEXYhDtgjuZHAnDMoOoHFtfot0bgUPRhmB/QpWx8CJRpLgnHnXf2qjnMpfnUfqd4v5Aue8W6cnnmYpeJv2ArANkQBdHCmz8Z6ZmR+kshlNG/CmDl0EYXkxEgkj8neT/9/pKHRv6lwI4ZuugQk1QZnG3lOpGRl4699gyj9/LHVt0xyyFAJK3vbkq7LytAThKyCRtTn3LeRVwVdHH5HnIVFSZTJIUNyZd7QzG2mhTNTeHibqtLlm+zBGheCWuztxc2/WKpaRuD2Ns1G/mO73i13T6RX7iF/aXtFCeFELY/sXtaIUvqNBeYEF3IB7g3p+iMZKy14ZwUma1elEAVgGgwJi5o8hpM6X/AhE7ZIb+E0ILKlV2V2wlzD1Xxgv9Vv/VD4mT97r1f+yWu5KF8LXZv7FnK/wDpTi8AKf4c1QmauIaUWZi/0T9fcS1il9hrHtYW2mLr8z4amJQB7SDOVLnAweqhF5y+ezUpOA6Lh9g+pEZhzrcsYMBZVK6RwtSKRO6L3TPtngdKxakNRbN83xMKP8BoBvK5jkR7JwiSqKq/N5F5ZrpI8VX8XlL50Ib3DnfaDAPN/ywDPbGabewrl7dd0Vh7UHl6zZvxpcJk4xNSSmjRIsuDzPqWWjuy01yE3rr5gd5Dor9TCBAhGyamu7rS4dmq9GfXY0JURyy7gCFXTgf0ILmSTIr5GJ6SirrdYk/7giykqjHhPfA8vLXLBNl6nHDldkloqUy7nW7SE0WiZlfSm7KrfoaMVBNtimReDDVK3UrxLqyK+jCx5YlOKmxs06zVaAEsOIrza8LuNPGsLXo0FxgQYXgHuDdXKIp06dED4A2IFgtb567RKa0WaIorydQCQJDxWhRwBV0+sx/Ole7FZzCzaHiFxku2ITE8mc4NdX0DlaYv4DaXqyWP9vNWFiPl2vJ/zqwgm1a7QH4LD0zf136XCP6IyZY78jwLJTW14rd+4Va3Gi5D3c7sZup9GIV+N7VbSXWlRn3HbPkkR4wCFnuippaOtWBMKElwky57de8Id1VTIYiRkSj5dENRTXzeUt4qbCuRDjJwdy3ybGyWT4ZxPt9mV5pvbtBh4MpjtCkBkAgH1Fgnkv+NtPMqbgD7/gBsJAMiEY2i77QX8pZG+IPUnxFP4Kx0U50OVVepNHAbQCWKk6Qc/FdeW+0/I+cV+35E1V4qkqr1FQl/cKPKPnD/2C9OVkMzcFRyIpvPjAF2uEpcxMCUjlY9NV2nVACqyns0XKDrNvy+1RJlXQJUiu3mDmLDtBJSyZ1KrDmB21Rvmvw9lWNaW3z+VHqZt3S94H"
    }}),
    )}),

    rest.post('/customPronounceName', (req, res, ctx) => {
      // Persist user's authentication in the session
      //sessionStorage.setItem('is-authenticated', 'true')
  
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({data:{
          "employeeId":"Raj123",
          "audio": "data:audio/wav;base64,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"
      }}),
      )}),

    rest.post('/updateAudio', (req, res, ctx) => {
      // Persist user's authentication in the session
      //sessionStorage.setItem('is-authenticated', 'true')
  
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          message: "Updated Successful",
      }),
      )
    }),

    rest.post('/user/getAllEmployees', (req, res, ctx) => {
      // Persist user's authentication in the session
      //sessionStorage.setItem('is-authenticated', 'true')
  
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          "message": "Success",
         
          "data": [
              {
                  "employeeId": "durga",
                  "firstName": "Durgarao",
                  "lastName": "DWarapureddi",
                  "preferredName": "Durga",
                  "address": "WELLS Fargo 1",
                  "city": "Chennai",
                  "country": "India",
                  "telephone": "7989579360",
                  "email": "test@test.com",
                  "roles" :["user"]
              },
              {
                  "employeeId": "durga1",
                  "firstName": "Durgarao",
                  "lastName": "DWarapureddi",
                  "preferredName": "Durga",
                  "address":"WELLS Fargo",
                  "city": "Hyderabad",
                  "country": "India",
                  "telephone": "71989579360",
                  "email": "test1@test.com",
                  "roles" :["user"]
              },
              {
                "employeeId": "durga2",
                "firstName": "Durgarao",
                "lastName": "DWarapureddi",
                "preferredName": "Durga",
                "address":"WELLS Fargo",
                "city": "Hyderabad",
                "country": "India",
                "telephone": "71989579360",
                "email": "test2@test.com",
                "roles" :["user", "admin"]
            }
          ]
      }),
      )
    }),
    rest.get('/resetAudio/*', (req, res, ctx) => {
      // Persist user's authentication in the session
      //sessionStorage.setItem('is-authenticated', 'true')
  
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          "message": "Success",
          "statusCode": "200",
          "data": {
              "employeeId": "Raj123",
              "firstName": "Rajasekhar",
              "lastName": "Uppalapati",
              "preferredName": "Raj",
              "address": "WELLS FARGO OFFICE",
              "city": "Hyderabad",
              "country": "India",
              "telephone": "9999999999",
              "email": "test@test.com",
          "roles" :["user", "admin"]
          }
      }),
      )
    })

  
]