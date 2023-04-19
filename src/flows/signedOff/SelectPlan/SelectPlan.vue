<template>
  <div>
    <SelectPlanLayout :services="services" />
  </div>
</template>

<script>
import SelectPlanLayout from './Layout.vue';

export default {
  name: 'SelectPlan',
  components: {
    SelectPlanLayout,
  },
  data() {
    return {
      services: [
      {
          bestSeller: false,
          title: 'Hospedagem 1',
          recommended: 'Ideal para site com mais de 30k de visitas.',
          planServices: [
            {
              title: 'Seu site em servidores nos Estados Unidos.',
              bulletPoints: [
                {
                  service: 'Servidores em nossos data center americanos;'
                },
                {
                  service: 'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;'
                },
                {
                  service: '1 usuário de FTP para upload ou download;'
                },
                {
                  service: '1 contas de e-mails profissionais;'
                },
                {
                  service: '1 subdomínio gratuito;'
                }
              ]
            },
            {
              title: 'Suporte 24 horas, 7 dias por semana grátis;'
            },
            {
              title: 'Aplicativos disponíveis;',
              bulletPoints: [
                {
                  service: 'Wordpress'
                },
                {
                  service: 'Drupal'
                },
                {
                  service: 'entre outros...'
                },
              ]
            },
            {
              title: 'Você ainda tem',
              bulletPoints: [
                {
                  service: 'Webmail RoundCube;'
                },
                {
                  service: 'AntiSpam;'
                },
                {
                  service: 'Painel de gerenciamento de DNS;'
                },
                {
                  service: 'Painel de controle web;'
                },
                {
                  service: 'Configurações de PHP personalizáveis;'
                },
                {
                  service: 'Painel de gerenciamento;'
                },
                {
                  service: 'Certificado SSL Grátis;'
                },
                {
                  service: 'Transferência ilimitada;'
                },
              ]
            },
          ]

        },
        {
          bestSeller: true,
          title: 'Hospedagem 2',
          recommended: 'Ideal para site com mais de 60k de visitas.',
          price: 499,
          planServices: [
            {
              title: 'Seu site em servidores nos Estados Unidos.',
              bulletPoints: [
                {
                  service: 'Servidores em nossos data center americanos;'
                },
                {
                  service: 'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;'
                },
                {
                  service: '1 usuário de FTP para upload ou download;'
                },
                {
                  service: '1 contas de e-mails profissionais;'
                },
                {
                  service: '1 subdomínio gratuito;'
                }
              ]
            },
            {
              title: 'Suporte 24 horas, 7 dias por semana grátis;'
            },
            {
              title: 'Aplicativos disponíveis;',
              bulletPoints: [
                {
                  service: 'Wordpress'
                },
                {
                  service: 'Drupal'
                },
                {
                  service: 'entre outros...'
                },
              ]
            },
            {
              title: 'Migração Gratuita;',
              bulletPoints: [
                {
                  service: 'Migramos todos seus sites para nossos servidores;'
                },
              ]
            },
            {
              title: 'Você ainda tem',
              bulletPoints: [
                {
                  service: 'Webmail RoundCube;'
                },
                {
                  service: 'AntiSpam;'
                },
                {
                  service: 'Painel de gerenciamento de DNS;'
                },
                {
                  service: 'Painel de controle web;'
                },
                {
                  service: 'Configurações de PHP personalizáveis;'
                },
                {
                  service: 'Painel de gerenciamento;'
                },
                {
                  service: 'Certificado SSL Grátis;'
                },
                {
                  service: 'Transferência ilimitada;'
                },
              ]
            },
          ]

        },
        {
          bestSeller: false,
          title: 'Hospedagem 3',
          recommended: 'Ideal para site com mais de 30k de visitas.',
          price: 999,
          planServices: [
            {
              title: 'Seu site em servidores nos Estados Unidos.',
              bulletPoints: [
                {
                  service: 'Servidores em nossos data center americanos;'
                },
                {
                  service: 'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;'
                },
                {
                  service: '1 usuário de FTP para upload ou download;'
                },
                {
                  service: '1 contas de e-mails profissionais;'
                },
                {
                  service: '1 subdomínio gratuito;'
                }
              ]
            },
            {
              title: 'Suporte 24 horas, 7 dias por semana grátis;'
            },
            {
              title: 'Aplicativos disponíveis;',
              bulletPoints: [
                {
                  service: 'Wordpress'
                },
                {
                  service: 'Drupal'
                },
                {
                  service: 'entre outros...'
                },
              ]
            },
            {
              title: 'Migração Gratuita;',
              bulletPoints: [
                {
                  service: 'Migramos todos seus sites para nossos servidores;'
                },
              ]
            },
            {
              title: 'Você ainda tem',
              bulletPoints: [
                {
                  service: 'Webmail RoundCube;'
                },
                {
                  service: 'AntiSpam;'
                },
                {
                  service: 'Painel de gerenciamento de DNS;'
                },
                {
                  service: 'Painel de controle web;'
                },
                {
                  service: 'Configurações de PHP personalizáveis;'
                },
                {
                  service: 'Painel de gerenciamento;'
                },
                {
                  service: 'Certificado SSL Grátis;'
                },
                {
                  service: 'Transferência ilimitada;'
                },
              ]
            },
          ]

        },
      ]
    }
  },
}
</script>
