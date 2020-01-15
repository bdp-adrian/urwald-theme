<?php
/**
 * Template Name: Kontakt
 */

$context = Timber::get_context();

$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['is_contact'] = true;
$templates = array( 'contact.twig' );

include('newsletter.php');

Timber::render( $templates , $context );