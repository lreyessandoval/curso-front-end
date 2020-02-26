@echo off
color 30
echo =============================================
echo =                                           =
echo =    Personalizado Instalar Sass Jean       =
echo =                                           =
echo =============================================
echo.
echo Crea carpetas
mkdir sass
cd sass
mkdir abstracts base components layout pages themes vendors
cd abstracts
echo  > _functions.scss
echo  >_mixin.scss
echo  >_variables.scss
echo  >_placeholders.scss
cd ..
cd base
echo  >_reset.scss
echo  >_typography.scss
cd ..
cd components 
echo  >_buttons.scss
cd ..
cd layout
echo  >_navigation.scss
cd ..
cd pages
echo  >_home.scss
cd ..
cd themes
echo  >_themes1.scss
cd ..
echo @charset 'UTF-8'; > main.scss
echo Esto esta personalizado, para salir presiona una tecla.
pause>nul
exit